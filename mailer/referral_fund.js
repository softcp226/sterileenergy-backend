// const nodemailer = require("nodemailer");

// const smtpTransport = require("nodemailer-smtp-transport");

// const transporter2 = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.panteramining.com",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 587,
//     auth: {
//       user: "support@panteramining.com",
//       pass: "panteramining1@1",
//     },
//   }),
// );

// let currentdate = new Date();
// let datetime = `${currentdate.getFullYear()}-${
//   currentdate.getMonth() + 1
// }-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

// let create_mail_options2 = (userInfo) => {
//   return (mailOptions = {
//     from: "support@panteramining.com",
//     // from:"michelleannschlloser@outlook.com",
//     to: userInfo.reciever,
//     subject: `REFERRAL BONUS CONFIRMATION NOTIFICATION`,
//     //   text:"just wanna know if this works",
//     html: `
//   <link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// <link
//   href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
//   rel="stylesheet"
// />
// <main    style="
//     font-family: 'Nunito', sans-serif;
//     font-family: 'Roboto', sans-serif;
//     background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
//     width: 100%;
//     background-size: cover;
//   "
// >

//   <div class="maincontainer">
//     <div class="head-txt">
//     <h1 style="text-align: center; font-size: 16px; color: #825ee4">
//         PANTERAMINING.COM
//       </h1>
//       <h3 style="font-size: 15px;">REFERRAL BONUS CONFIRMATION NOTIFICATION</h3>
//     </div>

//     <p class="sm-p">
//       Dear ${userInfo.first_name} ${userInfo.last_name}, a user that registerd using your referral link just made a deposit and you have recieved 5% referral bonus
//      which amounts to ${userInfo.referral_amount} on <b>${datetime}</b>.

//     </p>
//     <p class="sm-p">
//    Your 5% referral bonus has been added to your balance and also reflected on your referral bonus section
//     </p>
//     <p class="sm-p">
//     NB:all  deposit are converted to (united state dollars(USD)) which is the default currency used @panteraming.com.
//       For more detailed informations, please contact our customer support or your
//       relationship officer
//     </p>

//     <p class="sm-p">
//       incase you have any questions do not hesitate to contact us and we will
//       reach out to you as soon as possible
//     </p>
//     <br />
//     <h1
//       style="
//         font-size: 18px;
//         text-align: center;
//         background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%);
//         color: #fff;
//       "
//     >
//       PANTERAMINING.COM
//     </h1>
//     <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
//       Disclaimer: this message was automatically generated via pantera mining
//       secured channel,please do not reply to this message all correspondence
//       should be addressed to panteramining.com or your relationship officer
//     </p>
//   </div>
// </main>

//  `,
//   });
// };
// module.exports = { create_mail_options2, transporter2 };
// // transporter.sendMail(mailOptions, (err, info) => {
// //   if (err)
// //     return res
// //       .status(400)
// //       .json({ error: true, errMessage: `an error occured: ${err.message}` });
// //   // console.log(info)
// //   return res.status(200).json({ error: false, message: "message sent" });
// //   // console.log("message sent",info)
// // });

// // //   if (err)
// // //     return { error: true, errMessage: `an error occured: ${err.message}` };
// // //   // console.log(info)
// // //   return { error: false, message: "message sent" };
// // // });
// // };

const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

// const transporter2 = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.benefitsgloballtd.com",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 465,
//     auth: {
//       user: "support@benefitsgloballtd.com",
//       pass: "benefitsgloballtd1@1",
//     },
//   }),
// );

require("dotenv").config();
let transporter2 = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});

let currentdate = new Date();
let datetime = `${currentdate.getFullYear()}-${
  currentdate.getMonth() + 1
}-${currentdate.getDate()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;

let create_mail_options2 = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `REFERRAL BONUS CONFIRMATION NOTIFICATION`,
    //   text:"just wanna know if this works",
    html: `
  <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>
<main    style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  "
>

  <div class="maincontainer">
    <div class="head-txt">
    <h1 style="text-align: center; font-size: 16px; color: rgb(26, 115, 232)">
        Sterile Energy
      </h1>
      <h3 style="font-size: 15px;">REFERRAL BONUS CONFIRMATION NOTIFICATION</h3>
    </div>

    <p class="sm-p">
      Dear ${userInfo.first_name} ${userInfo.last_name}, a user that registerd using your referral link just made a deposit and you have recieved 5% referral bonus
     which amounts to ${userInfo.referral_amount} on <b>${datetime}</b>.

    </p>
    <p class="sm-p">
   Your 5% referral bonus has been added to your balance and also reflected on your referral bonus section
    </p>
    <p class="sm-p">
    NB:all  deposit are converted to (united state dollars(USD)) which is the default currency used @sterileenergy.uk
      For more detailed informations, please contact our customer support or your
      relationship officer
    </p>

    <p class="sm-p">
      incase you have any questions do not hesitate to contact us and we will
      reach out to you as soon as possible
    </p>
    <br />
    <h1
      style="
        font-size: 18px;
        text-align: center;
        background: linear-gradient(87deg, rgb(26, 115, 232) 0, rgb(26, 115, 232) 100%);
        color: #fff;
      "
    >
    Sterile Energy
    </h1>
    <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
      Disclaimer: this message was automatically generated via sterileenergy
      secured channel,please do not reply to this message all correspondence
      should be addressed to sterileenergy.uk or your relationship officer
    </p>
  </div>
</main>

 `,
  });
};
module.exports = { create_mail_options2, transporter2 };
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };
