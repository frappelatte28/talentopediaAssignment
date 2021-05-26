const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
app.listen(7000, () => console.log("Server Running"));
app.get("/", (req, res) => {
  console.log("moafn");
  res.send("wassup sexy!<333");
});
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});
app.post("/sendEmail", (req, res, next) => {
  console.log("cnsic");
  let { name, email, message } = req.body;

  var mail = {
    from: name,
    to: email,
    text: message,
  };

  contactEmail.sendMail(mail, (err, data) => {
    if (err) {
      res
        .json({
          status: "fail",
        })
        .status(500);
    } else {
      res.status(200).json({
        status: "success",
      });
    }
  });
});
