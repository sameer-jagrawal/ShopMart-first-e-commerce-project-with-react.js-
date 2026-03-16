import React from "react"

export default function Login() {
    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center px-6">

            <div className="bg-white w-full max-w-md p-8 rounded-xl shadow">

                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-800 text-center">
                    Login
                </h1>

                <p className="text-gray-500 text-center mt-2">
                    Welcome back! Please login to your account.
                </p>

                {/* Form */}
                <form className="mt-8 space-y-5">

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-600">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm text-gray-600">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                        />
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm">

                        <label className="flex items-center gap-2 text-gray-600">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <a href="#" className="text-green-600 hover:underline">
                            Forgot Password?
                        </a>

                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
                    >
                        Login
                    </button>

                </form>

                {/* Register Link */}
                <p className="text-center text-gray-600 mt-6 text-sm">
                    Don't have an account?
                    <a href="#" className="text-green-600 font-medium ml-1 hover:underline">
                        Register
                    </a>
                </p>

            </div>

        </div>
    )
}