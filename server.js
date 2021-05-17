const express = require('express');
const User = require('./models').user;

const PORT = 4001;

const app = express()


app.get('/users', async (request, response) => {
  try {
    console.log("i got a request for the user list")

    const allUsers = await User.findAll();
    response.send(allUsers)
  } catch(e) {
    console.log(e.message);
  }
}) 



app.listen(PORT, () => console.log("server running"))