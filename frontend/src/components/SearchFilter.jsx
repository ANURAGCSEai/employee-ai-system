import { useState } from "react";
import axios from "axios";

function SearchFilter() {

    const [department, setDepartment] = useState("");
    const [employees, setEmployees] = useState([]);

    const handleSearch = async () => {

        const response = await axios.get(
            `https://employee-backend-7hl3.onrender.com/api/employees/search?department=${department}`
        );

        setEmployees(response.data);

    };

    return (

        <div>

            <h2>Search Employee</h2>

            <input
                type="text"
                placeholder="Department"
                value={department}
                onChange={(e) =>
                    setDepartment(e.target.value)
                }
            />

            <button onClick={handleSearch}>
                Search
            </button>

            {
                employees.map((emp) => (

                    <div key={emp._id}>

                        <p>
                            {emp.name} - {emp.department}
                        </p>

                    </div>

                ))
            }

        </div>

    );

}

export default SearchFilter;