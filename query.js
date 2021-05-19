const User = require('./models').user;
const TodoList = require('./models').todoList;

const userWithLists = async (id) => {
  try {
    // query todoLists where userId === id
    // query user findByPk with id

    const user = await User.findByPk(id, {
      attributes: ['name', 'email'],
      include: [{ model: TodoList, attributes: ['name'] }],
    })

    console.log(user.dataValues.todoLists)

  } catch(e) {
    console.log(e.message);
  }
}

userWithLists(1);


// Read:
// .findAll => []
// .findByPk => {} || null

// Create:
// .create

// Finding all of them
const getAllUsers = async () => {
  try {
    const all = await User.findAll();
    console.log(all);
  } catch(e) {
    console.log(e.message)
  }
}

// Finding by Id (primary key)
const getOneUser = async (id) => {
  try {
    const all = await User.findByPk(id);
    console.log('one user', all);
  } catch(e) {
    console.log(e.message)
  }
}

// findAll with condition
const getUserWithEmail = async () => {
  try {
    const all = await User.findAll({
      where: { email: 'matias@codaisseur.com' }, 
      attributes: ['name', 'id']}
    );
    console.log(all);
  } catch(e) {
    console.log(e.message)
  }
}

//getAllUsers();
// getOneUser(2);
// getUserWithEmail()


// Create a new user 
const createNewUser = async () => {
  try { 
    const newGuy = await User.create({ name: 'Rafael', email: 'rafa@rafa.com', password: '123' })
    console.log(newGuy);
  } catch(e) {
    console.log(e.message)
  }
}

// createNewUser();

const deleteUserById = async (id) => {
  try {
    // First we find him
    const toDelete = await User.findByPk(id);
    console.log(toDelete);

    // once we have him, we delete him.
    await toDelete.destroy()

    console.log("user deleted", id);

  } catch (e) {
    console.log(e.message);
  }
}

// deleteUserById(4);