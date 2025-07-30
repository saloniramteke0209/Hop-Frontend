import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('');
    const [Id, setId] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting:", { name, Id, role });
            const res = await axios.post('http://localhost:3000/api/', {
                name,
                Id,
                role
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // alert("Login Successfully")
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("role", res.data.role);

                if (res.data.role === "admin") {
                    navigate("/admin");
                    alert("Login Successfully")
                }
                if (res.data.role === "doctor") {
                    navigate("/doctor");
                    alert("Login Successfully")
                }
                if (res.data.role === "patient") {
                    navigate("/patient");
                    alert("Login Successfully")
                }
                else {
                    alert("No token return")
                }
                console.log("Sending login:", { name, Id, role });
            }
        }

        catch (error) {
            console.error("Login error:", error.response ? error.response.data : error.message);
            alert("Login Failed");

        }
    }
    //   console.log({ name, Id, role });
    return (
        <div className="max-w-md mx-auto p-6 bg-white text-black rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                    Name:
                    <input type="name" className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label className="block mb-4">
                    ID:
                    <input type="ID" className="w-full p-2 border rounded" value={Id} onChange={(e) => setId(e.target.value)} required />
                </label>
                <label className="block text-gray-800 font-medium text-sm mb-1">Role</label>
                <select className="w-full px-4 py-2 border border-gray-300  rounded-md bg-white" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                </select>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
            </form>
            {/* <p className="mt-4">
        Don't have an account? <Link to="/register" className="text-blue-600">Register</Link>
      </p> */}
        </div>
    )
}

export default Login;
