import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactData = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section className="bg-gray-800">
      <div className="h-screen sm:flex sm:flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* Dummy Contact Information Section */}
        <div className="w-full sm:max-w-md md:w-1/2 bg-gray-700 text-white p-6 rounded-lg mt-6 sm:mt-0 sm:mr-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">
            Email: <span className="text-blue-400">support@healthpal.com</span>
          </p>
          <p className="mb-2">
            Phone: <span className="text-blue-400">+1 234 567 890</span>
          </p>
          <p className="mb-2">
            Address:{" "}
            <span className="text-blue-400">
              123 HealthPal Street, City, Country
            </span>
          </p>
          <p className="mt-4">
            You can also reach us through our social media channels:
          </p>
          <div className="flex space-x-4 mt-2">
            <Link to="#" className="text-blue-400 hover:underline">
              Facebook
            </Link>
            <Link to="#" className="text-blue-400 hover:underline">
              Twitter
            </Link>
            <Link to="#" className="text-blue-400 hover:underline">
              Instagram
            </Link>
          </div>
        </div>

        {/* Contact Us Form Section */}
        <div className="w-full bg-gray-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Contact Us
            </h1>

            <form className="space-y-4 md:space-y-6" onSubmit={handleContactData}>
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  name="textarea"
                  rows="3"
                  value={message}
                  className="px-3 py-2 w-full rounded bg-slate-300 outline-none text-black"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
