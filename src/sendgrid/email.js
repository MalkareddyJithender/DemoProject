const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('here the api key is to be added!');

//send the mail to jithender from radha 
sgMail.send({
    to:'jithendermalkareddy@gmail.com',
    from:'radha@gmail.com',
    subject:'Receive Information',
    text:'This is to inform you that it is a very important message.'
});