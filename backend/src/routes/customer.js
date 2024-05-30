const customerController = require("../controllers/customer");
const express = require("express");
const router = express.Router();
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

router.post("/authenticate", customerController.authenticate);
router.get("/", customerController.findAll);
router.get("/:id", customerController.findById);
router.post("/:id/address", customerController.addNewAddress);
router.post("/", customerController.create);
router.put("/:id", uploads, customerController.updateById);
router.delete("/:id", customerController.deleteById);
router.post("/:email", customerController.generateOtp);
router.post("/number/:number", customerController.generateMobileOtp);

module.exports = router;
