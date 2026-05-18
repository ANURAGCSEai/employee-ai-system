import { useState } from "react";
import axios from "axios";

function EmployeeForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "",
        skills: "",
        performanceScore: "",
        experience: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = {
                ...formData,
                skills: formData.skills.split(",")
            };

            await axios.post(
                "https://employee-backend-7hl3.onrender.com/api/employees",
                data
            );

            alert("Employee Added");

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div>

            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="skills"
                    placeholder="Skills"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="performanceScore"
                    placeholder="Performance Score"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="experience"
                    placeholder="Experience"
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Add Employee
                </button>

            </form>

        </div>

    );

}

export default EmployeeForm;