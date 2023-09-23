import dotenv  from 'dotenv';

dotenv.config()

export const DB_URI = process.env.DB_URI
export const MONGO_URL_ATLAS =process.env.MONGO_URL_ATLAS || "mongodb://localhost:27017/test"
export const MONGOPORT = process.env.PORT || 8080