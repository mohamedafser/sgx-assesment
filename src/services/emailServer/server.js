const express = require("express");
const nodemailer = require("nodemailer");
var cors = require('cors');
const app = express();
require("dotenv").config();

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});
app.use(express.json());

app.use(cors());

app.post("/send-mail", function (req, res) {
    const { email,first_name, last_name, description } = req.body;
    let mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Sgx Assesment",
      html: `<!DOCTYPE html>
      <html>
      <head>
      <style>
      table, td, th {
        border: 1px solid;
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
      }
      
      th {
        text-align: left;
      }
      </style>
      </head>
      <body>
      <table>
        <tr>
          <th align="left">First Name</th>
          <th align="left">Last Name</th>
          <th align="left">Email</th>
          <th align="left">Description</th>
        </tr>
        <tr>
          <td>${first_name}</td>
          <td>${last_name}</td>
          <td>${email}</td>
          <td>${description}</td>
        </tr>
      </table>
      
      </body>
      </html>`,
    };
   
    transporter.sendMail(mailOptions, function (err, data) {
        let response = {...req.body}
      if (err) {
        res.send({...response, status: "error"});
      } else {
        res.send({...response, status: "success"});
      }
    });
});

const port = 3001;

app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});