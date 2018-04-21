//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable connect to server');
    }
    //console.log('Connected to MongoDB Server');
    //const db = client.db('TodoApp')
    //db.collection('Todos').find({
    //    _id: new ObjectId('5adad57e39996cb03d2d464a')
    //}).toArray().then((docs) => {
    //    console.log('Todos');
    //    console.log(JSON.stringify(docs, undefined, 2));
    //}, (err) => {
    //    console.log('Unable to fetch the data', err);
    //});

    //});   
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');
    db.collection('Todos').find({ name: 'Pratap' }).count().then((count) => {
        console.log(`Number of pratap name collection are ${count}`);
    }, (err) => {
        console.log('Unable to find the collection', err);
        });
    db.collection('Todos').find({ name: 'Pratap' }).toArray().then((data) => {
        console.log(JSON.stringify(data, undefined, 2));
    }, (err) => {
        console.log('Not able to feth the colletion', err);
    })

});

//console.log('Connected to MongoDB Server');
//const db = client.db('TodoApp')
//db.collection('Todos').find().count().then((count) => {
//    console.log(`Number of Todos collection are ${count} `);
//    }, (err) => {
//    console.log('Unable to fetch the data', err);
//});
       
//    });
