const MongoClient = require('mongodb').MongoClient;

var use = { name: 'Pratap', age: 41 };
var { name } = use;
console.log(name);

//MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//    if (err) {
//        return console.log('Unable connect to server');
//    }
//    console.log('Connected to MongoDB Server');
//    //const db = client.db('TodoApp')
//    //db.collection('Todos').insertOne({
//    //    text: 'somethin special ',
//    //    completed: false
//    //}, (err, result) => {
//    //    if (err) {
//    //        return console.log('Unable to add records', err);
//    //    }

//    //    console.log(JSON.stringify(result.ops, undefined, 2));
//    //});

//    //client.close();
//    //});
//    const db = client.db('TodoApp');
//    db.collection('Users').insertOne({
//        text: 'Something about users Robert',
//        age: 30,
//        emailaddress: 'robert@example.com'
//    }, (err, result) => {
//        if (err) {
//            return console.log('Unable to add collection', err);
//        }
//        console.log(result.ops[0]._id.getTimestamp() );
//    })

//    client.close();
//});
