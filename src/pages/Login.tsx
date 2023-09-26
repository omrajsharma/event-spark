import Container from "../components/atoms/Container";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import Card from "../components/atoms/Card";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidEmailError, setInvalidEmailError] = useState('');
  const [invalidPasswordError, setInvalidPasswordError] = useState('');

  const handleEmailChange = (ev: any) => {
    setEmail(ev.target.value);
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

    if (email.length == 0) {
      setInvalidEmailError('Empty Email')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setInvalidEmailError('Wrong Email Format')
      return
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setInvalidPasswordError('Invalid Password')
    }

    // API Call
  }

  return (
    <Container>
      <Card customCss="mx-auto my-14">
        <div className="border-b border-gray-200 pb-2 mb-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Login</h3>
        </div>
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
