//environment variable
const dotenv = require("dotenv");
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.notion_token });
const databaseId = process.env.notion_db_task;
const redisService = require("./redisService");

exports.postPrimaryTasksService = async () => {
  try {
    const cacheKey = `${redisService.CACHE_KEY_PREFIX.PRIMARY_TASKS}${databaseId}`;
    const cachedData = await redisService.getCache(cacheKey);
    if (cachedData) {
      console.log("キャッシュからプライマリタスクを取得しました");
      return cachedData;
    }
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Priority",
        status: {
          equals: "High",
        },
      },
      sorts: [
        {
          property: "Deadline",
          direction: "descending",
        },
      ],
    });
    await redisService.setCache(cacheKey, response);

    return response;
  } catch (error) {
    console.error("クエリに問題があります。:", error.message);
  }
};

exports.postTasksService = async () => {
  try {
    const cacheKey = `${redisService.CACHE_KEY_PREFIX.ALL_TASKS}${databaseId}`;
    const cachedData = await redisService.getCache(cacheKey);
    if (cachedData) {
      console.log("キャッシュからタスクを取得しました");
      return cachedData;
    }
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "Deadline",
          direction: "ascending",
        },
      ],
    });
    await redisService.setCache(cacheKey, response);

    return response;
  } catch (error) {
    console.error("クエリに問題があります。:", error.message);
  }
};

exports.invalidateTasksCache = async () => {
  try {
    const primaryTasksKey = `${redisService.CACHE_KEY_PREFIX.PRIMARY_TASKS}${databaseId}`;
    const allTasksKey = `${redisService.CACHE_KEY_PREFIX.ALL_TASKS}${databaseId}`;

    await Promise.all([
      redisService.deleteCache(primaryTasksKey),
      redisService.deleteCache(allTasksKey),
    ]);

    console.log("タスクのキャッシュを削除しました");
  } catch (error) {
    console.error("キャッシュの削除に失敗しました:", error);
  }
};
