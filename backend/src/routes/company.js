const express = require("express");
const router = express.Router();

const companyController = require("../controllers/company");
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
}).fields([{ name: "companyLogo" }]);

router.post("/authenticate", companyController.authenticate);
router.get("/", companyController.findAll);
router.get("/:id", companyController.findById);
router.post("/", companyController.create);
router.put("/:id",uploads, companyController.updateById);
router.delete("/:id", companyController.deleteById);

module.exports = router;
