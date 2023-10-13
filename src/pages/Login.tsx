import Container from "../components/atoms/Container";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import Card from "../components/atoms/Card";
import { useContext, useState } from "react";
import axios from "axios";
import AppAlert from "../utility/AppAlert";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const userContext = useContext(UserContext)
  console.log(userContext);

  const appAlert = AppAlert()!;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidEmailError, setInvalidEmailError] = useState('');
  const [invalidPasswordError, setInvalidPasswordError] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleUsernameChange = (ev: any) => {
    setUsername(ev.target.value);
  }

  const handlePasswordChange = (ev: any) => {
    setPassword(ev.target.value)
  }

  const resetErrorMsgs = () => {
    setInvalidEmailError('');
    setInvalidPasswordError('');
  }

  const handleLogin = () => {
    resetErrorMsgs();

    if (username.length == 0) {
      setInvalidEmailError('Empty Email')
      return
    }
    const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{1,29}$/
    if (!usernameRegex.test(username)) {
      setInvalidEmailError('Wrong Email Format')
      return
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setInvalidPasswordError('Invalid Password')
    }

    // API Call
    axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/login`, {
      username: username,
      password: password
    }, {
      withCredentials: true
    })
    .then((response) => {
      if (response.status == 200) {
        if (appAlert && appAlert.showAlert){
          appAlert?.showAlert({message: "User Logged In", type: "SUCCESS", duration: 5000});
          userContext.setUserInfo({
            userId: response.data.data.userId,
            username: response.data.data.username,
            name: response.data.data.name,
            email: response.data.data.email,
          })
          setRedirectToHome(true)
        }
      }
    })
    .catch((err) => {
      if (appAlert && appAlert.showAlert)
        appAlert?.showAlert({message: err.response.data.error, type: "ERROR", duration: 5000});
    })
  }
  
  if (redirectToHome) {
    return <Navigate to={'/'} />
  }

  return (
    <Container>
      <Card customCss="mx-auto my-14">
        <div className="border-b border-gray-200 pb-2 mb-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Login</h3>
        </div>
        <div className="mx-auto">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="username"
              id="username"
              className={`${invalidEmailError ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500" : "" } block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
              placeholder=""
              aria-invalid="true"
              aria-describedby="email-error"
              value={username}
              onChange={handleUsernameChange}
            />
            { invalidEmailError && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
          { invalidEmailError && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {invalidEmailError}
            </p>
          )}
        </div>

        <div className="mx-auto max-w-md">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="password"
              name="password"
              id="password"
              className={`${invalidPasswordError ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500" : "" } block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
              aria-invalid="true"
              aria-describedby="email-error"
              value={password}
              onChange={handlePasswordChange}
            />
            { invalidPasswordError && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
          { invalidPasswordError && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {invalidPasswordError}
            </p>
          )}
        </div>

        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="rounded-full bg-indigo-500 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleLogin}
          >
            Button text
          </button>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
