const express = require('express');
const router = express.Router();
const indexCtrl = require('../controller/controller');
const signupCtrl = require('../controller/signup');
const signinCtrl = require('../controller/signin');


router.get('/', indexCtrl.getHome);

router.post('/signup', signupCtrl.postSignup);
router.post('/signin', signinCtrl.postSignIn);
router.get('/logout', signinCtrl.getLogout);


module.exports = router;