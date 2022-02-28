const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5433,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

client.query('SELECT * FROM contacts').then(console.log);
exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};
