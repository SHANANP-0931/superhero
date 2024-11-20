import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from './../../services/allapi'; // Assuming loginAPI is correctly imported

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reqBody = { email, password };

        try {
            const res = await loginAPI(reqBody);  // Call loginAPI

            if (res && res.data && res.data.token) {
                // Store the token if present
                localStorage.setItem('authToken', res.data.token);

                // Redirect to the admin dashboard
                navigate('/admin/dashboard');
            } else {
                // Handle error if no token in the response
                console.error("Login failed: Token not found in response");
                alert("Login failed: Token not found");
            }
        } catch (err) {
            // Catch any errors from the API request
            console.error("Login API error:", err);
            alert("Login failed: " + (err.message || "Unknown error"));
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-4/5 lg:w-3/5 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image Section */}
                    <div className="hidden lg:block">
                        <img
                            className="w-full h-full object-cover"
                            src="https://clipart-library.com/images_k/superhero-transparent-background/superhero-transparent-background-4.png"
                            alt="Landing"
                        />
                    </div>

                    {/* Login Form Section */}
                    <div className="p-8">
                        <h1 className="text-3xl font-bold mb-4 text-gray-800">Goast Walker</h1>
                        <h5 className="text-xl font-semibold mb-6 text-gray-600">Sign In to your account</h5>
                        <form onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <div className="mb-4 text-black">
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    className="mt-1 block w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
