//environment variable
const dotenv = require("dotenv");
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.notion_token });
const databaseId = process.env.notion_db_task;

exports.postPrimaryTasksService = async () => {
  try {
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
    return response;
  } catch (error) {
    console.error("クエリに問題があります。:", error.message);
  }
};

exports.postTasksService = async () => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "Deadline",
          direction: "ascending",
        },
      ],
    });
    return response;
  } catch (error) {
    console.error("クエリに問題があります。:", error.message);
  }
};
