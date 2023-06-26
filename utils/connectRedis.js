const { createClient } = require("redis");
const config = require("config");
// const redisUrl = `redis://localhost:6379`;
const redisUrl = `redis://${config.get("redisName")}:${config.get(
  "redisPass"
)}@redis-14583.c212.ap-south-1-1.ec2.cloud.redislabs.com:14583`;
const redisClient = createClient({
  url: redisUrl,
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("Redis client connected...");
  } catch (err) {
    console.log(err.message);
    setTimeout(connectRedis, 5000);
  }
};

connectRedis();

redisClient.on("error", (err) => console.log(err));

module.exports = redisClient;
