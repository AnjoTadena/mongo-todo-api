
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) { return console.log('Unable to connect to the Mongo DB Client.'); }

    console.log('Connected to Mongo DB Client.');

    // db.collection('Todos').insertOne({
    //     text: 'New Todo 2',
    //     completed: false
    // }, (insertError, insertResult) => {
    //     if (insertError) { console.log('Unable to insert todo.', insertError); }

    //     console.log(JSON.stringify(insertResult.ops, undefined, 2));
    // });

    // Add new users (name, age, location) document
    // db.collection('Users').insertOne({
    //     name: 'Anjo Tadena',
    //     age: 26,
    //     location: 'P 6 Dologon, Maramag, Bukidnon, Philippines'
    // }, (insertError, insertResult) => {
    //     if (insertError) { return console.log('Unable to insert user.', insertError); }

    //     console.log(JSON.stringify(insertResult.ops, undefined, 2));
    // });

    db.collection('Todos')
        .find({
            _id: new ObjectID('5a457521a68a5903760dcdef')
        })
        .toArray()
        .then((document) => {
            console.log('Todos');
            console.log(JSON.stringify(document, undefined, 2));
        })
        .catch((error) => {
            console.log('Unable to fetch todos document.', error);
        });

    db.close();
});
