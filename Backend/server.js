const express = require("express");
const app = express();
const PORT = 3000;
const cors=require('cors');
const nodemailer=require('nodemailer');
require('dotenv').config()

// Middleware (for parsing JSON)
app.use(cors({
  origin:["http://localhost:5173","https://aparichit2.netlify.app"]
}))
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
    res.send({
      activeStatus:true,
      error:false
    });
    // "Welcome to the Express Server!"
});

app.post('/sendmail',async (req,res)=>{
    const data=req.body;
    const userEmail=data.email;
    console.log("body is: ",data);

    // mail sending

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVICE,
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER, // Email address
          pass: process.env.EMAIL_PASS, // Email password
        },
      })
  
    //   console.log("transporter in sendOTPEmail: ",transporter);
      const receipients=[userEmail,process.env.EMAIL_USER];
      
  
      const mailOptions = {
        from: `"Aparichit 💀☠" <${process.env.EMAIL_USER}>`,
        to: receipients, // Recipient's email
        subject: 'Your Complain Submitted successfully',
        text: `Your Complaint submitted successfully`, // Plain text body
        html: `<h1>Your Complaint submitted successfully we will go through it💀☠</h1>
        <h2>Your Complaint is:</h2>
        <p>${data.complain}</p>`,
      }
  
      
        const info=await transporter.sendMail(mailOptions);
        console.log("Emails sent successfully");
        
    res.json({message:'Submitted successfully...'})
    
})


// Start the Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
