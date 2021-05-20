const express = require('express');
const userRouter = require('./routers/user');
const authRouter = require('./routers/auth');

const PORT = 4001;

const app = express()

const loggingMiddleware = (request, response, next) => {
  console.log("I got a request!!", request.method, request.headers, new Date())
  next();
}

// App level Middlewares
app.use(express.json()); // body-parser middleware;

// Routers
app.use('/users', loggingMiddleware, userRouter); // routes about users
app.use('/auth', authRouter)
// app.use('/lists', listRouter); // routes about todoLists
// app.use('/auth', authRouter); // signup/login

app.listen(PORT, () => console.log("server running"))