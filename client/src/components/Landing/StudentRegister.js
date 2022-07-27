import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import  "./Register.css";

const StudentRegister = () => {
	const [error, setError] = useState("");

    const [credentials, setCredentials] = useState({name: "",userId: "", password: "", subject: ""}) 
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:8080/teacher/addStu", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':localStorage.getItem('auth-token')
                },
                body: JSON.stringify({name:credentials.name, userId: credentials.userId, password: credentials.password, subject:credentials.subject})
            });
            const json = await response.json()
            console.log(json);
            history('/student')
        }catch(error){
            console.log(error)
        }
    }

    const handleChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

	return (
		<form className="form_container" onSubmit={handleSubmit}>
			<h1>Add Student</h1>
			<input
				type="text"
				placeholder="Name"
				name="name"
				onChange={handleChange}
				value={credentials.name}
				required
				className="input"
			/>
			<input
				type="text"
				placeholder="Student ID"
				name="userId"
				onChange={handleChange}
				value={credentials.userId}
				required
				className="input"
			/>
			<input
				type="password"
				placeholder="Password"
				name="password"
				onChange={handleChange}
				value={credentials.password}
				required
				className="input"
			/>
			<input
				type="text"
				placeholder="Subject"
				name="subject"
				onChange={handleChange}
				value={credentials.subject}
				required
				className="input"
			/>
			{error && <div className="error_msg">{error}</div>}
			<button type="submit" className="green_btn">
				Add
			</button>
		</form>
	);
};

export default StudentRegister;
