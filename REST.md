

## REST

REpresentational State Transfer

1. Operations as HTTP Methods
2. Respond with appropiate status codes
3. Clean and meaningful urls


CRUD => Create Read Update Delete

1. Operations as HTTP Method

GET     POST     PUT     DELETE     PATCH
Read    Create   Update  Delete     Update

app.get
app.post
app.patch
app.delete

2. Appropiate status codes:

200.. Ok          All fine
RES.SEND RES.JSON
300.. Redirected  Some where else

400.. User error  You screwed up
NO CREDENTIALS - 401
Bad request = 400
users/10 - 404


3. Clean and meaningful urls:

- shorter
- memorable
- predictable

GET - /users
POST - /users



GET - /users/:id
PATCH - /users/:id







POST - /sendEmail  RPC endpoints => remote procedure call



POST - /createAUser
GET - /listOfUsers
GET - /oneUser/:id


