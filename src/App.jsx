import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle form submission here, such as validating user inputs and making API requests.
    console.log("Form submitted with email:", email, "and password:", password);
  };

  const handleGoogleLoginSuccess = (tokenResponse) => {
    console.log("Google login successful:", tokenResponse);
    // Add your logic to handle the successful login here, such as redirecting to another page or setting user state.
  };

  const handleGoogleLoginError = () => {
    console.log("Google login failed");
    // Add your logic to handle login errors here, such as displaying an error message to the user.
  };

  const handleFacebookLoginSuccess = (response) => {
    console.log("Facebook login successful:", response);
    // Add your logic to handle the successful login here
    
    // Redirect the user to your desired URL
    window.location.href = "http://localhost:5173/";
  };

  const handleFacebookLoginError = (error) => {
    console.log("Facebook login failed:", error);
    // Add your logic to handle login errors here
  };

  const login = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    onError: handleGoogleLoginError,
    clientId:
      "58562817379-ocgq8pn2lt8a7ju4rovto5up1h08e05b.apps.googleusercontent.com",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <div className="mt-6 space-y-4">
            <button
              onClick={() => login()}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out mb-2" 
            >
             Sign in with Google
            </button>

            <FacebookLogin
              appId="452130493876693"
              autoLoad={false}
              fields="name,email,picture"
              callback={handleFacebookLoginSuccess}
              onFailure={handleFacebookLoginError}
              cssClass="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition duration-300 ease-in-out"
              icon={<i className="fab fa-facebook-f mr-6 text-xl" />}
              textButton="Sign in with Facebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
