import axios from "axios";

const http = axios.create({
	baseURL: import.meta.env.VITE_SERVER_BASE_URL,
	timeout: 300000,
	headers: {
		"ngrok-skip-browser-warning": "69420",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Credentials": true,
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default http;
