const express = require("express");
const cors = require("cors");
var https = require('https');

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // Allow credentials
  })
);

app.use(express.json());

require("./connectDB");
const customerRouter = require("./src/routes/customer");
const courseRouter = require("./src/routes/course");
const companyRouter = require("./src/routes/company");
const jobsRouter = require("./src/routes/jobs");

app.use("/api/v1/src/uploads", express.static(__dirname + "/src/uploads"));
app.use("/api/v1/customers", customerRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/jobs", jobsRouter);

// handle error
app.use((error, req, res, next) => {
  console.log(error);
  const status = error?.status || 500;
  return res.status(status).json({
    success: false,
    message: error?.message || "Internal Server Error",
  });
});

var fs = require('fs');
var options = {
    key: fs.readFileSync('/home/rishijob/ssl/keys/98c9b_b7a2d_8f4aa6ded9a7b25a74794f650885bc26.key'),
    cert: fs.readFileSync('/home/rishijob/ssl/certs/rishijob_com_98c9b_b7a2d_1714435199_d2fc82f7f2f1ae93f9565bc2b27d10ae.crt'),
};

var listener = https.createServer(options, app).listen(5000, function () {
    console.log('Express HTTPS server listening on port ' + listener.address().port);
});
