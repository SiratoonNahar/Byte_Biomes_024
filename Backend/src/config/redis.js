const redis = require('redis');
require("dotenv").config();
const { REDIS_URL } = process.env;

const client = redis.createClient({
  url: REDIS_URL,
});

client.connect();

client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

module.exports = { client };
