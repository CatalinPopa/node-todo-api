const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5b8e725debae6a91a997a892').then((todo) => {
  console.log(todo);
});
