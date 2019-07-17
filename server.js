const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const morgan = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
let db;

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));

app.put('/user', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    db.collection('users')
        .insertOne(user)
        .then(obj => res.status(201).json(obj.ops[0]));
});

app.delete('/user/:id', (req, res) => {
    db.collection('users')
        .deleteOne({_id: ObjectId(req.params.id)})
        .then(() => res.status(204).send());
});

app.get('/user/:id', (req, res) => {

});

app.get('/user', (req, res) => {

});


app.listen(port, () => {
    MongoClient.connect('mongodb://localhost:27017/app', {useNewUrlParser: true})
        .then((client) => {
            db = client.db('app');
            console.log('Connected to DB');
        })
        .catch(() => console.log('Could not connect to DB'));
    console.log(`Example app listening on port ${port}!`);
});