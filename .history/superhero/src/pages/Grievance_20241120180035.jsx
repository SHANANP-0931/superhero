import React, { useState } from 'react';
import Header from '../components/Header';

const Grievance = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        problemDescription: '',
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/grievances/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setShowPopup(true);
                setFormData({ name: '', email: '', mobileNumber: '', problemDescription: '' });
            } else {
                console.error('Failed to submit grievance');
            }
        } catch (error) {
            console.error('Error submitting grievance:', error);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <Header />
            <div className="relative h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/420IWNk.jpg')" }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Form Container */}
                <div className="relative z-10 bg-transparent bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-lg mx-4">
                    <h2 className="text-2xl font-bold text-black text-center mb-6">Grievance Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-black mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-1">Mobile Number</label>
                            <input
                                type="tel"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                placeholder="Enter your mobile number"
                                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-1">Problem Description</label>
                            <textarea
                                name="problemDescription"
                                value={formData.problemDescription}
                                onChange={handleChange}
                                placeholder="Describe your issue"
                                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                                rows="4"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-500 hover:bg-red-600 text-black py-2 rounded-lg transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Popup */}
                {showPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
                            <p>Your grievance has been submitted successfully!</p>
                            <button
                                onClick={closePopup}
                                className="bg-red-500 hover:bg-red-600 text-black py-2 px-4 rounded-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Grievance;
