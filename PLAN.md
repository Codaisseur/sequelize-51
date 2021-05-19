## Set up associations:

1. Users  => have => todoLists

todoLists => have => todoItems


User => hasMany => todoLists
todoList => belongsTo => User
  (userId)

Setting it up:

- Add references (foreignKey) in a new migration. Create a new column in **todoList** userId. (this is not a normal column, we also need to add the references)



- Set up the associations in the models (belongsTo, hasMany, belongsToMany)
