const express = require('express');
const bodyParser =require('body-parser');
const nodemailer = require('nodemailer');
const app = new express()  ;             // run the server in localhost:3000 in thunderclient or postman

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


let  mailTransporter = nodemailer.createTransport({

 service : 'gmail',
 auth:{
    user:'fsddemo543@gmail.com',
    pass:'sojfcubjoiavttzt'        //password changed after testing the code
 }
})
app.post('/email',(req,res)=>{
const email = req.body.email;
const subject = req.body.subject;
const text = req.body.text;
let details ={
    from:'fsddemo543@gmail.com',
    to:email,                    // takes the value of "to","subject" &"text"  from req.body
    subject:subject,
    text:text
}
mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("An error occured",err);
        res.send("An error occured");
    }
    else{
        console.log(`Email sent to ${email}`);
        res.send(`Email  sent to ${email}`);
    }
})

})
app.listen(3000,()=>{
    console.log("server running at port 3000")
})
