const jsonServer = require('json-server');
const nodemailer = require('nodemailer');
var multer  = require('multer');
const request = require('request');
const bcrypt = require('bcrypt');
var logger = require("./src/util/logger.js");
var auth = require("./src/admin/auth.js");
const session = require('express-session');

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
var upload = multer()

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.post('/email', upload.single('blob'), function(req, res){
  console.log(req.body);
  var transporter = nodemailer.createTransport({
    host: 'smtp.orange.fr',
    port: 25,
    secure: false,
    auth: {
      user: 'anastasia.chinsky@wanadoo.fr',
      pass: '-K`C<"tcq876`nY7'
    },
    tls: {
      rejectUnauthorized:false
    }
  });
  
  var mailOptions = {
    from: 'anastasia.chinsky@wanadoo.fr',
    to: 'anastasia.chinsky@gmail.com',
    subject: 'Sending Email using Node.js',
    text:"test",
    attachments:[{
      filename: 'test.csv',
      content: req.file.buffer,
      encoding: 'utf-8'
    }]
  };
  
  /*transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });*/
  res.end('email sent');
})

//server.post('/login', (req, res) => auth.postSignIn(req, res));
server.post('/login', function(req, res){
  console.log(req.body);
  if (req.body.username && req.body.password) {
		request('http://localhost:5000/users?username=' + req.body.username, (error, httpResponse, body) => {
			if (error) {
				logger.error('signin() - ' + error);
				return res.status(httpResponse).json({ message: error.message });
			}
			if (httpResponse.statusCode === 404) {
				logger.warn('signin() - user not found : ' + req.body.email);
				return res.status(404).json({ signin: false });
			}
      const user = JSON.parse(body);
      /*console.log(user[0].password);
      console.log(req.body.password);*/
      bcrypt.hash("adv2", 10, function(err, hash) {
        console.log(hash);
      });
      var i = 0;
      while(i < user.length){
        /*if (!bcrypt.compareSync(req.body.password, user[i].password)) {
          logger.warn('signin() - user authentication failed : ' + user[i].id);
          return res.status(200).json({ signin: false });
          break;
        }*/
        if(bcrypt.compareSync(req.body.password, user[i].password)){
          logger.warn('signin() - user authentificated successfully : ' + user[i].id);
          //break;
          return res.status(200).json({
            signin: true, id: user[i].id, username: user[i].username, role: user[i].role,
          });
         
        }
        i = i + 1;
      }
		});
	}
})

server.use(router)

server.listen(5000, () => {
  console.log('JSON Server is running')
})