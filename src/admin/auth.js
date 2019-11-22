const request = require('request');

const index = (req, res) => {
	if (req.session.connected) return res.redirect('/');
	return res.render('signin', {
		session: req.session,
	});
};

const signOut = (req, res) => {
	req.session.destroy();
	return res.redirect('/');
};

const postSignIn = (req, res) => {
	if (req.session.connected) return res.redirect('/');

	if (req.body.email && req.body.password) {
		request.post({ url: 'http://localhost:5000/users?email=' + req.body.email, form: { email: req.body.email, password: req.body.password } }, (error, httpResponse, body) => {
			if (error) {
				console.log('signin() - ' + error);
				req.flash('danger', 'Unexpected error - Please contact the administrator of the interface');
				return res.redirect('/login');
			}
			const jsonResponse = JSON.parse(body);
			if (jsonResponse.signin) {
				req.session.connected = true;
				//req.session.userId = jsonResponse.id;
				//req.session.username = jsonResponse.username;
				req.session.email = jsonResponse.email;
				req.session.admin = jsonResponse.admin || false;
				return res.redirect('/');
			}
			req.flash('danger', 'Invalid email or password - If you forgot your credentials, please contact the administrator of the interface');
			return res.redirect('/');
		});
	}
	else {
		req.flash('danger', 'All fields are required');
		return res.redirect('/');
	}
};

module.exports =  [
	index,
	signOut,
	postSignIn,
];