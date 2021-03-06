const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

// use middleaware
app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fvbrr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
            await client.connect();
            const productCollection=client.db('pandaProduct').collection('product');
    }
    finally {

    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(port);
});