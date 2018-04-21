//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable connect to server');
    }
    
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');
    //db.collection('Todos').deleteOne({ text: 'somethin special ' }).then((result) => {
    //    console.log(result);
    //})
    //db.collection('Todos').findOneAndDelete({ name: 'Prathmesh' }).then((result) => {
    //    console.log(result);
    //})
    db.collection('Todos').findOneAndDelete({
        _id: new ObjectId("5adade8139996cb03d2d48b6")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })
});

//console.log('connected to mongodb server');
//const db = client.db('todoapp')
//db.collection('todos').find().count().then((count) => {
//    console.log(`number of todos collection are ${count} `);
//    }, (err) => {
//    console.log('unable to fetch the data', err);
//});
       
//    });
