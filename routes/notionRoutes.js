const express = require("express");
const notionController = require("../controllers/notionController");
const router = express.Router();

router.post("/form", notionController.postForm);
router.post("/primary-tasks", notionController.postPrimaryTasks);
router.post("/tasks", notionController.postTasks);

module.exports = router;
