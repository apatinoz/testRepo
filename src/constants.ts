import * as dotenv from 'dotenv';
dotenv.config();

export const DB_PROVIDER = 'DbConnectionToken';
export const SERVICE = 'DB_MONGO_SERVICE';
export const APP_NAME = process.env.APP_NAME || 'clean.architecture';
export const DATABASE_SERVICE = process.env.DATABASE_SERVICE || 'DATABASE_SERVICE';
export const APP_PORT = process.env.PORT || 4001;
export const APP_HOST = process.env.APP_HOST || '0.0.0.0';
export const MONGO_HOSTNAME = 'mongodb+srv://zlivio:Zlivio123*@cluster0.3x5ri.mongodb.net/PracticeTest?retryWrites=true&w=majority';
export const REGISTER_MODEL_PROVIDER = 'RegisterModelProvider';
export const DEFAULT_DB_CONNECTION = 'DatabaseConnection';




