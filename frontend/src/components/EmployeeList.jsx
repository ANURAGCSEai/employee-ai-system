import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        fetchEmployees();

    }, []);

    const fetchEmployees = async () => {

        const response = await axios.get(
            "https://employee-backend-7hl3.onrender.com/api/employees"
        );

        setEmployees(response.data);

    };

    return (

        <div>

            <h2>Employee List</h2>

            {
                employees.map((emp) => (

                    <div
                        key={emp._id}
                        style={{
                            border: "1px solid black",
                            margin: "10px",
                            padding: "10px"
                        }}
                    >

                        <h3>{emp.name}</h3>

                        <p>Email: {emp.email}</p>

                        <p>Department: {emp.department}</p>

                        <p>
                            Skills:
                            {
                                emp.skills.join(", ")
                            }
                        </p>

                        <p>
                            Performance:
                            {emp.performanceScore}
                        </p>

                    </div>

                ))
            }

        </div>

    );

}

export default EmployeeList;