const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: process.env.DB_HOST || "31.97.233.100",
  user: process.env.DB_USER || "ExpressClub",
  password: process.env.DB_PASSWORD || "XERpd8Gy7nKRfdcs",
  database: process.env.DB_NAME || "expressclub",
});

export default connection;
