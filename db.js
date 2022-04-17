const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "2001",
  host: "192.168.56.103",
  database: "sportdb",
  port: 5432,
});

module.exports = pool;
