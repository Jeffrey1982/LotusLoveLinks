const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other email services like Yahoo, Outlook, etc.
    auth: {
        user: 'jeffrey.aay@gmail.com',
        pass: 'Destiney7!'
    }
});

const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'YOUR_EMAIL_ADDRESS@gmail.com',
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendEmail;
