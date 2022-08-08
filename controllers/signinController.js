const { query } = require("express");

exports.signin = async (req, res) => {
  try {
    if(req.session.admin){
        res.redirect("/admin")
    } else if(req.query.valid){
        res.render('pages/signin', {
            err: true,
          });
    }
    else{
        res.render('pages/signin');
    }

  } catch (error) {
    res.status(500).send({ message: error.message || 'Error Occured' });
  }
};

exports.check = async (req, res) => {
  try {
    const { login, password } = req.body;
    if (login == 'admin' && password == '123') {
      req.session.admin = 1;
      res.redirect('/admin');
    } else {
     const string = encodeURIComponent('false');
      res.redirect("/signin?valid="+ string);
    }
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error Occured' });
  }
};
