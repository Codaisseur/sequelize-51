const express = require('express');
const userRouter = require('./routers/user');
const authRouter = require('./routers/auth');
const TodoList = require('./models').todoList;
const authMiddleware = require("./auth/middleware");
const cors = require('cors');

const PORT = 4001;

const app = express()

app.use(cors());
const loggingMiddleware = (request, response, next) => {
  console.log("I got a request!!", request.method, request.headers, new Date())
  next();
}

// App level Middlewares
app.use(express.json()); // body-parser middleware;

// Routers
app.use('/users', userRouter); // routes about users
app.use('/auth', authRouter)
// app.use('/lists', listRouter); // routes about todoLists
// app.use('/auth', authRouter); // signup/login


app.post('/todoList', authMiddleware, async (req, res, next) => {
  try {
    const { name } = req.body;
    const userId = req.user.id;
    const newList = await TodoList.create({ name, userId });
    res.send(newList);
  } catch (e) {
    next(e)
  }
})

app.listen(PORT, () => console.log("server running"))