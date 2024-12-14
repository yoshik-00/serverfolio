require("dotenv").config();

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.notion_token });
const databaseId = process.env.notion_db;

exports.postFormService = async (req) => {
  try {
    const { name, email, phone, message } = req.body;
    await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: "e1a5c0c2c5aa4cc885d2676c05269924",
      },
      properties: {
        Phone: {
          id: "hJRY",
          type: "phone_number",
          phone_number: phone,
        },
        Message: {
          id: "isAU",
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: message,
                link: null,
              },
              plain_text: "There is some ",
              href: null,
            },
          ],
        },
        Name: {
          id: "p%3Fvg",
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: name,
                link: null,
              },
              plain_text: "There is some ",
              href: null,
            },
          ],
        },
        Email: {
          id: "qnFP",
          type: "email",
          email: email,
        },
        Title: {
          id: "title",
          type: "title",
          title: [],
        },
      },
    });
  } catch (error) {
    console.error("Error querying Notion database:", error.message);
  }
};
