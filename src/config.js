// src/config.js
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://gift-walah.onrender.com/api" // 🔹 Replace with your actual Render backend URL
    : "http://localhost:4000/api";

export default API_BASE_URL;
