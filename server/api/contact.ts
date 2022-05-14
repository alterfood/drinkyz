import nodemailer from 'nodemailer';

export default defineEventHandler((event) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });

  console.log('toto')
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'angwelo.maiorano@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      return {
        api: 'works'
      }
    } else {
      return {
        api: 'error'
      }
    }
  })

})