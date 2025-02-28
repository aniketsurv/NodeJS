// Load environment variables from .env file
//require('dotenv').config();
import 'dotenv/config';

// Accessing environment variables
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

console.log(`Database Host: ${dbHost}`);
console.log(`Database User: ${dbUser}`);
