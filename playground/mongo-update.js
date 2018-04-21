//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable connect to server');
    }
    
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');
    //db.collection('Todos').findOneAndUpdate({
    //    _id: new ObjectId("5adadeda39996cb03d2d48d0")

    //}, {
    //        $set: {
    //            completed: false
    //        }
    //      }, {
    //           returnOriginal: false
    //}).then((result) => {
    //    console.log(result)
    //   })

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId("5adadce239996cb03d2d4845")
    }, {
            $set: {
                name: 'Pratap'
            },
            $inc: {
                age: 17
            }
        }, {
            returnOriginal: false
    }).then((result) => {
        console.log(result);
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
