//environment variable
const dotenv = require("dotenv");
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.notion_token });
const databaseId = process.env.notion_db_form;

exports.postFormService = async (req) => {
  try {
    const { name, email, phone, message } = req.body;
    await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: databaseId,
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
    console.error("クエリに問題があります。:", error.message);
  }
};
