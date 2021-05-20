const { Router } = require('express');
const User = require('../models').user;

const router = new Router();


const loggingMiddleware = (request, response, next) => {
  console.log("I got a request!!", request.method, request.headers, new Date())
  next();
}


const failRandom = (req, res, next) => {
  const fail = Math.random() * 10
  if (fail > 1) {
    res.status(401).send("")
  } else {
    next()
  }
}

// Route level middlewares => only apply to this route
router.get('/', failRandom, async (request, response, next) => {
  try {
    console.log("Hi from the router")

    const allUsers = await User.findAll();
    response.send(allUsers)
  } catch(e) {
    next(e)
  }
})




router.get('/:id', async (request, response, next) => {
  try {

    // check the request headers
    // get the token from the request
    // check the user table to see if he exists
    //  check token to see its valid



    const userId = parseInt(request.params.id);
    console.log(userId);
    const user = await User.findByPk(userId);
    console.log(user);

    if (!user) {
      response.status(404).send("User not found");
    } else {
      response.send(user);
    }

  } catch(e) {
    next(e); // We call express error handler 
  }
})


router.post('/', async (request, res, next) => {
  try {
    // email, password, name
    console.log('body', request.body);

    const { email, name, password } = request.body;

    if (!email || !password) {
      res.status(400).send("missing parameters");
    } else {
      const user = await User.create({ name: name, email: email, password: password });
      console.log(user);
      res.send(user);
    }


  } catch (e) {
    next(e); 
  }
})


router.patch('/users/:id', async (req, res, next) => {
  try {
    console.log(req.body);
    const id = req.params.id;

    const name = req.body.name;

    const user = await User.findByPk(id);

    console.log(user);

    await user.update({ name })

    res.send(user);
    // get the id from the params
    // find the user
    // update him with ?

  } catch(e) {
    next(e)
  }
})


module.exports = router