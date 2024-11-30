require("dotenv").config();

const { Client } = require("@notionhq/client");
// Notion Clientの設定
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
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error querying Notion database:", error.message);
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
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error querying Notion database:", error.message);
  }
};
