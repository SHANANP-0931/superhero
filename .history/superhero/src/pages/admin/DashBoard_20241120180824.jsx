import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [tableData, setTableData] = useState([]);

    // Fetch grievances data when the component mounts
    useEffect(() => {
        const fetchGrievances = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/grievances/all");
                const data = await response.json();
                setTableData(data);
            } catch (error) {
                console.error("Error fetching grievances:", error);
            }
        };

        fetchGrievances();
    }, []);

    // Logout section
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        navigate("/login");
    };

    const handleStatusChange = async (id, newStatus, email, name, problemDescription) => {
        try {
            const response = await fetch(`http://localhost:5000/api/grievances/update-status/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });

            if (response.ok) {
                if (newStatus === "Solved") {
                    await handleSendEmail(id, email, name, problemDescription);
                }

                setTableData((prev) =>
                    prev.map((row) =>
                        row._id === id ? { ...row, status: newStatus, emailSent: false } : row
                    )
                );
            } else {
                console.error("Failed to update status.");
            }
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    // Handle sending email and mark action as completed
    const handleSendEmail = async (id, email, name, problemDescription) => {
        try {
            const response = await fetch(`http://localhost:5000/api/grievances/send-email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    name,
                    problemDescription,
                }),
            });

            if (response.ok) {
                // Update status to 'Completed' in database
                const updateResponse = await fetch(`http://localhost:5000/api/grievances/update-email-status/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ emailSent: true }),
                });

                if (updateResponse.ok) {
                    setTableData((prev) =>
                        prev.map((row) => (row._id === id ? { ...row, emailSent: true } : row))
                    );
                    alert(`Email sent to ${email}`);
                } else {
                    console.error("Failed to update email sent status.");
                }
            } else {
                console.error("Failed to send email.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200">
            <header className="bg-blue-800 text-white py-4 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="container mx-auto py-6 px-4">
                <div className="bg-gray-800 rounded-lg p-6 shadow-md mb-6">
                    <h2 className="text-xl font-bold mb-4">Admin Profile</h2>
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://i.pinimg.com/originals/0c/9f/76/0c9f76aeaeb7ce1fb2ab877a626f626b.png"
                            alt="Admin Profile"
                            className="w-24 h-24 rounded-full border-4 border-blue-500"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">Admin Name: AURORA</h3>
                            <p>Email: aurora@superhero.com</p>
                            <p>Role: Super Hero</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-bold mb-4">User Issues</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border-collapse border border-gray-700">
                            <thead>
                                <tr className="bg-blue-700 text-left text-white">
                                    <th className="border border-gray-700 px-4 py-2">ID</th>
                                    <th className="border border-gray-700 px-4 py-2">Details of Person</th>
                                    <th className="border border-gray-700 px-4 py-2">Problem</th>
                                    <th className="border border-gray-700 px-4 py-2">Status</th>
                                    <th className="border border-gray-700 px-4 py-2">Action</th>
                                    <th className="border border-gray-700 px-4 py-2">Completed Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row) => (
                                    <tr
                                        key={row._id}
                                        className={`hover:bg-gray-700 ${row.status === "Solved" ? "bg-green-300" : "bg-red-300"
                                            }`}
                                    >
                                        <td className="border border-gray-700 px-4 py-2">{row._id}</td>
                                        <td className="border border-gray-700 px-4 py-2">
                                            <p>
                                                <strong>Name:</strong> {row.name}
                                            </p>
                                            <p>
                                                <strong>Email:</strong> {row.email}
                                            </p>
                                            <p>
                                                <strong>Phone:</strong> {row.mobileNumber}
                                            </p>
                                        </td>
                                        <td className="border border-gray-700 px-4 py-2">
                                            {row.problemDescription}
                                        </td>
                                        <td className="border border-gray-700 px-4 py-2">
                                            <select
                                                className="bg-gray-800 text-white border border-gray-700 rounded px-2 py-1"
                                                value={row.status}
                                                onChange={(e) =>
                                                    handleStatusChange(
                                                        row._id,
                                                        e.target.value,
                                                        row.email,
                                                        row.name,
                                                        row.problemDescription
                                                    )
                                                }
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="Solved">Solved</option>
                                            </select>
                                        </td>
                                        <td className="border border-gray-700 px-4 py-2">
                                            <button
                                                className={`px-3 py-1 rounded text-sm ${row.status === "Solved" && !row.emailSent
                                                    ? "bg-yellow-500 hover:bg-yellow-600"
                                                    : "bg-gray-500 cursor-not-allowed"
                                                    }`}
                                                disabled={row.status !== "Solved" || row.emailSent}
                                                onClick={() =>
                                                    handleSendEmail(
                                                        row._id,
                                                        row.email,
                                                        row.name,
                                                        row.problemDescription
                                                    )
                                                }
                                            >
                                                {row.emailSent ? "Email Sent" : "Send Email"}
                                            </button>
                                        </td>
                                        <td className="border border-gray-700 px-4 py-2">
                                            {row.emailSent ? "Completed" : "Not Completed"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
