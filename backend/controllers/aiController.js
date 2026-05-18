const axios = require("axios");

const getRecommendation = async (req, res) => {

    try {

        const employee = req.body;

        const prompt = `
        Employee Details:
        Name: ${employee.name}
        Department: ${employee.department}
        Skills: ${employee.skills}
        Performance Score: ${employee.performanceScore}
        Experience: ${employee.experience}

        Give:
        1. Promotion Recommendation
        2. Training Suggestions
        3. Performance Feedback
        `;

        const response = await axios.post(

            "https://openrouter.ai/api/v1/chat/completions",

            {
                model: "openai/gpt-3.5-turbo",

                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            },

            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }

        );

        res.json({
            recommendation:
                response.data.choices[0].message.content
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getRecommendation
};