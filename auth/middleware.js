const User = require("../models").user;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  // Try to get the auth header from the request, and if it exists, we split it.
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");

  // check if auth exists and if it's type Bearer
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      // Try to decode token
      const data = toData(auth[1]); // => { userId: 4 };
      console.log("what is data?", data);



      const user = await User.findByPk(data.userId);
      if (!user) {
        res.status(404).send("No user found");
      } else {
        req.user = user;
        next();
      }


      
    } catch (error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`,
      });
    }
  } else {
    res.status(401).send({
      message: "Please supply some valid credentials",
    });
  }
}

module.exports = auth;