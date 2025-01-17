const notionFormService = require("../services/notionFormService");
const notionTasksService = require("../services/notionTasksService");

exports.postForm = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      console.log("リクエストボディがありません");
      return res.status(400).json({ message: "リクエストボディがありません" });
    }
    const formResponse = await notionFormService.postFormService(req);
    res.status(200).json({ message: "データが正常に送信されました" });
  } catch (error) {
    res.status(500).json({ message: "エラーが発生しました" });
  }
};
exports.postPrimaryTasks = async (req, res) => {
  try {
    const taskResponse = await notionTasksService.postPrimaryTasksService();
    if (!taskResponse) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(taskResponse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.postTasks = async (req, res) => {
  try {
    const taskResponse = await notionTasksService.postTasksService();
    if (!taskResponse) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(taskResponse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
