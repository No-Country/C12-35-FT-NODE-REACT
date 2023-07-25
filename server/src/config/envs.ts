import dotenv from "dotenv";
dotenv.config();

//Port
export const PORT = process.env.PORT || "8000";

//JWT
export const SECRET = process.env.SECRET || "12345";

//Database
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USERNAME = process.env.DB_USERNAME || "postgres";
export const DB_PASSWORD = process.env.DB_PASSWORD || "root";
export const DB_NAME = process.env.DB_NAME || "postgres";
export const DB_PORT = process.env.DB_PORT || "5432";

//Routes host
export const HOST = process.env.HOST || "http://localhost:8001";

//Mailer
export const MAILER_PORT = process.env.MAILER_PORT || "465";
export const MAILER_USER = process.env.MAILER_USER || "";
export const MAILER_PASS = process.env.MAILER_PASS || "";

//PayPal
export const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "";
export const PAYPAL_SECRET_KEY = process.env.PAYPAL_SECRET_KEY || "";
export const PAYPAL_API = process.env.PAYPAL_API || "";
