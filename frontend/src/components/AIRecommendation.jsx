import { useState } from "react";
import axios from "axios";

function AIRecommendation() {

    const [recommendation, setRecommendation] = useState("");

    const getAIRecommendation = async () => {

        const response = await axios.post(
            "http://localhost:5000/api/ai/recommend",
            {
                name: "Aman Verma",
                department: "Development",
                skills: ["React", "Node.js"],
                performanceScore: 90,
                experience: 4
            }
        );

        setRecommendation(
            response.data.recommendation
        );

    };

    return (

        <div>

            <h2>AI Recommendation</h2>

            <button onClick={getAIRecommendation}>
                Generate Recommendation
            </button>

            <p>{recommendation}</p>

        </div>

    );

}

export default AIRecommendation;