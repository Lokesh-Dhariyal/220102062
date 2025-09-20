import axios from "axios";

// Replace with your actual external API URL
const EXTERNAL_API_URL = "http://20.244.56.144/evaluation-service";

// User Registration Endpoint
export const registerUser =  async (req, res) => {
   try {
     const response = await axios.post(`${EXTERNAL_API_URL}/register`,req.body);
     res.status(response.status).json(response.data);
   } catch (error) {
        console.error("Register error:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({
        error: error.message,
        details: error.response?.data || null,
        });
   }
};

// User Login Endpoint
export const loginUser = async (req, res) => {
  try {
    const response = await axios.post(`${EXTERNAL_API_URL}/auth`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
        console.error("Register error:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({
          error: error.message,
          details: error.response?.data || null,
        });
  }
};
