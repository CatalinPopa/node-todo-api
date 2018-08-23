const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server.');
  }
  console.log('Connected to MongoDb server.');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b7e557073e476d83f6e8037')
  // }).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 4));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  db.collection('Users').find({
    name: 'Andrew'
  }).toArray().then((users) => {
    console.log(JSON.stringify(users, undefined, 4));
  }, (err) => {
    console.log('Unable to fetch todos', err)
  });

  // db.close();
});
