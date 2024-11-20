import React, { useState } from 'react';
import Header from '../components/Header';

const Grievance = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        problemDescription: ''
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/grievances/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
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
            <div
                style={{
                    position: 'relative',
                    backgroundImage: `url('https://wallpapercave.com/wp/420IWNk.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundBlendMode: "50%"
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        zIndex: 1,
                    }}
                ></div>


                <div
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        maxWidth: '500px',
                        width: '100%',
                        textAlign: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Grievance Form</h2>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: '5px' }}>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            style={inputStyle}
                            required
                        />

                        <label style={{ marginBottom: '5px' }}>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            style={inputStyle}
                            required
                        />

                        <label style={{ marginBottom: '5px' }}>Mobile Number:</label>
                        <input
                            type="tel"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            placeholder="Enter your mobile number"
                            style={inputStyle}
                            required
                        />

                        <label style={{ marginBottom: '5px' }}>Problem Description:</label>
                        <textarea
                            name="problemDescription"
                            value={formData.problemDescription}
                            onChange={handleChange}
                            placeholder="Describe your issue"
                            style={{ ...inputStyle, height: '80px' }}
                            required
                        />

                        <button type="submit" style={buttonStyle}>
                            Submit
                        </button>
                    </form>
                </div>

                {showPopup && (
                    <div style={popupOverlayStyle}>
                        <div style={popupStyle}>
                            <p>Your grievance has been submitted successfully!</p>
                            <button onClick={closePopup} style={{ ...buttonStyle, marginTop: '10px' }}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    color: 'black',

    marginBottom: '15px',
    border: '1px solid #ccc'
};

const buttonStyle = {
    padding: '12px',
    backgroundColor: 'red',
    color: 'white',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
};

const popupOverlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: "99"
};

const popupStyle = {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: 'white',
    textAlign: 'center',
    width: '300px',
    color: 'black'
};

export default Grievance;
