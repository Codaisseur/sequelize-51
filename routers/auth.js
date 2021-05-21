const { Router } = require('express');
const User = require('../models').user;
const { toJWT, toData } = require('../auth/jwt');
const bcrypt = require('bcrypt');

const router = new Router();

router.post('/login', async (req, res, next) => {
  try {
    // email + password
    const { email, password } = req.body;

    // Find the user .findAll .findOne with the email
    const user = await User.findOne({ where: { email: email }});
    // i have the user
    if(!user) {
      return res.status(400).send("Wrong credentials");
    }
    // check if parameter password === stored password
    const validPassword = password === user.dataValues.password; // without encrypting password

    // if all good => create token and send back
    if (validPassword) {
      console.log("Valid!!");
      // Create a token for this guy!
      const token = toJWT({ userId: user.id }); // data = { userId: 1 };
      res.send({ message: "Wooo you're logged in", token });

    } else {
      res.status(400).send("Wrong credentials");
    }  
    
  } catch(e) {
    next(e);
  }
})



router.get('/test-auth', async (req, res, next) => {
  try {
    // console.log("headers", req.headers)
    // Try to get the token from the header
    const authHeader = req.headers.authorization;
    // "Bearer orbhrhbhfkfbiugbfbliBFiwf"
    const token = authHeader.split(" ")[1] // => ["Bearer", "kjabsjasdkbaskdbakjdbaks"]

    // Verify token
  
    const data = toData(token);

    console.log('decoded token', data);
    res.send("testing");
  } catch(e) {
    console.log(e.message)
    next(e)
  }
})


module.exports = router;