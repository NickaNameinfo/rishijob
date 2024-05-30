const express = require("express");
const router = express.Router();

const courseController = require("../controllers/jobs");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/uploads");
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const uploads = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
}).fields([{ name: "resume" }]);

router.get("/", courseController.findAll);
router.get("/:id", courseController.findById);
router.post("/", uploads, courseController.create);
router.put("/:id", courseController.updateById);
router.delete("/:id", courseController.deleteById);

module.exports = router;
