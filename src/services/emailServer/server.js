/** 
*
* server.js
* this file which hold entry point of the email server and backend
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/

// EXPERSS IMPORT 
const express = require("express");
// NODE MAILER IMPORT
const nodemailer = require("nodemailer");
// CROSS ORIGIN IMPORT
var cors = require('cors');
// INITIATE EXPRESS
const app = express();
// ENV CONFIG
require("dotenv").config();

// INITIALIZING NODE MAILER
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

// VERIFY NODE MAILER
transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});

// USE BODY PARSE EXPRESS
app.use(express.json());

// USE CROSS ORIGIN
app.use(cors());

// CREATE SEND EMAIL REST API 
app.post("/send-mail", function (req, res) {
    // EMAIL REQUEST BODY
    const { email,first_name, last_name, description } = req.body;
    // EMAIL OPTIONS
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
   
    // SEND EMAIL
    transporter.sendMail(mailOptions, function (err, data) {
      let response = {...req.body}
      // IF ERROR IN SEND MAIL
      if (err) {
        res.send({...response, status: "error"});
      }
      // IF EMAIL SEND SUCCESSFULLY
      else {
        res.send({...response, status: "success"});
      }
    });
});

// APPLICATION PORT
const port = 3001;

// APPLICATION LISTENER
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});