const express = require('express');
const userRouter = require('./routers/user');

const PORT = 4001;

const app = express()

// Middlewares
app.use(express.json()); // body-parser middleware;

// Routers
app.use('/users', userRouter); // routes about users
// app.use('/lists', listRouter); // routes about todoLists
// app.use('/auth', authRouter); // signup/login

app.listen(PORT, () => console.log("server running"))