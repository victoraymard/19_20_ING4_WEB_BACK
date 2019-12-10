const mongoose = require('mongoose');
const URI = 'mongodb+srv://UserBDD:UserBDD@cluster0-ld81e.mongodb.net/project_BDD?retryWrites=true&w=majority';

const connectDB = async() => {
       await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        dbName: 'project_BDD'
    });
    console.log('db connected..!');
};
module.exports = connectDB;



/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://UserBDD:UserBDD@cluster0-ld81e.mongodb.net/project_BDD?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("project_BDD").collection("user");
    // perform actions on the collection object
    client.close();
});*/
