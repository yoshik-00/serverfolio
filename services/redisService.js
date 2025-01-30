// services/redisService.js
const Redis = require("ioredis");
const dotenv = require("dotenv");
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });

const redis = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD,
});
const CACHE_TTL = 300;
const CACHE_KEY_PREFIX = {
  PRIMARY_TASKS: "notion:primary-tasks:",
  ALL_TASKS: "notion:all-tasks:",
};
exports.getCache = async (key) => {
  try {
    const cachedData = await redis.get(key);
    return cachedData ? JSON.parse(cachedData) : null;
  } catch (error) {
    console.error("Redisからの読み込みエラー:", error);
    return null;
  }
};
exports.setCache = async (key, data) => {
  try {
    await redis.set(key, JSON.stringify(data), "EX", CACHE_TTL);
  } catch (error) {
    console.error("Redisへの書き込みエラー:", error);
  }
};
exports.deleteCache = async (key) => {
  try {
    await redis.del(key);
  } catch (error) {
    console.error("Redisからの削除エラー:", error);
  }
};

exports.CACHE_KEY_PREFIX = CACHE_KEY_PREFIX;
