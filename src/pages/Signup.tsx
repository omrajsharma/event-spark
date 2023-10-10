import Container from "../components/atoms/Container";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import Card from "../components/atoms/Card";
import { useState } from "react";
import axios from "axios";
import AppAlert from "../utility/AppAlert";

const Signup = () => {
  const appAlert = AppAlert();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState<number>();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [invalidNameError, setInvalidNameError] = useState('');
  const [invalidPhoneError, setInvalidPhoneError] = useState('');
  const [invalidEmailError, setInvalidEmailError] = useState('');
  const [invalidUserNameError, setInvalidUserNameError] = useState('');
  const [invalidPasswordError, setInvalidPasswordError] = useState('');

  const handleNameChange = (ev: any) => {
    setName(ev.target.value);
  }

  const handleEmailChange = (ev: any) => {
    setEmail(ev.target.value);
  }

  const handlePhoneChange = (ev: any) => {
    setPhone(ev.target.value);
  }

  const handleUserNameChange = (ev: any) => {
    setUserName(ev.target.value);
  }

  const handlePasswordChange = (ev: any) => {
    setPassword(ev.target.value)
  }

  const resetErrorMsgs = () => {
    setInvalidNameError('');
    setInvalidEmailError('');
    setInvalidPhoneError('');
    setInvalidUserNameError('');
    setInvalidPasswordError('');
  }

  const handleSignup = () => {
    resetErrorMsgs();

    if (name.length == 0) {
      setInvalidNameError('Empty Name')
      return
    }
    if (name.length > 50) {
      setInvalidNameError('Max Length Should Be 50 Characters')
      return
    }
    if (email.length == 0) {
      setInvalidEmailError('Empty Email')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setInvalidEmailError('Wrong Email Format')
      return
    }
    if (phone?.toString().length != 10 ) {
      setInvalidPhoneError('Invalid Phone Number')
      return
    }
    const usernameFormat = /^[A-Za-z][A-Za-z0-9_]{1,29}$/
    if (!usernameFormat.test(userName)) {
      setInvalidUserNameError('Invalid User Name Format')
      return
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setInvalidPasswordError('Invalid Password')
    }

    // API Call
    axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/register`, {
      name: name,
      phone: phone,
      email: email,
      username: userName,
      password: password
    })
    .then((response) => {
      if (response.status == 201) {
        if (appAlert && appAlert.showAlert)
          appAlert?.showAlert({message: "User Created", type: "SUCCESS", duration: 5000});
      }
    })
    .catch((err) => {
      if (err.response.status == 400) {
        if (appAlert && appAlert.showAlert)
          appAlert?.showAlert({message: err.response.data.error, type: "ERROR", duration: 5000});
      }
    })
  }

  return (
    <Container>
      <Card customCss="mx-auto my-14">
        <div className="border-b border-gray-200 pb-2 mb-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Signup</h3>
        </div>

        {/* INPUT FIELDS */}

        {/* Full Name */}
        <div className="mx-auto">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Full Name
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="name"
              id="name"
              className={`${invalidNameError ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500" : "" } block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
              placeholder="John Doe"
              aria-invalid="true"
              aria-describedby="email-error"
              value={name}
              onChange={handleNameChange}
            />
            { invalidNameError && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
          { invalidNameError && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {invalidNameError}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mx-auto">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              className={`${invalidEmailError ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500" : "" } block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
              placeholder="you@example.com"
              aria-invalid="true"
              aria-describedby="email-error"
              value={email}
              onChange={handleEmailChange}
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

        {/* Phone */}
        <div className="mx-auto">
          <label
            htmlFor="Phone"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="number"
              name="phone"
              id="phone"
              className={`${invalidPhoneError ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500" : "" } block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
              placeholder="9876543210"
              aria-invalid="true"
              aria-describedby="email-error"
              value={phone}
              onChange={handlePhoneChange}
            />
            { invalidPhoneError && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
          { invalidPhoneError && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {invalidPhoneError}
            </p>
          )}
        </div>

        {/* Username */}
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
              className={`${invalidUserNameError ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500" : "" } block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
              placeholder="johndoe"
              aria-invalid="true"
              aria-describedby="email-error"
              value={userName}
              onChange={handleUserNameChange}
            />
            { invalidUserNameError && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
          { invalidUserNameError && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {invalidUserNameError}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mx-auto max-w-md">
          <label
            htmlFor="password"
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
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>
      </Card>
    </Container>
  );
};

export default Signup;
