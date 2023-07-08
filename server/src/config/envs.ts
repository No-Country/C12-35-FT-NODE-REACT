import dotenv from "dotenv";
dotenv.config();

export const SECRET = process.env.SECRET || "";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USERNAME = process.env.DB_USERNAME || "postgres";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_NAME = process.env.DB_NAME || "postgres";
export const DB_PORT = process.env.DB_PORT || "5432";
