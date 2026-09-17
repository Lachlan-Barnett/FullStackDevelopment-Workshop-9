const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.set('etag', false);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { serverSelectionTimeoutMS: 5000 });
const dbName = 'mydb';
const PORT = 3000;

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);

    require('./read')(db, app);
    require('./add')(db, app);
    require('./update')(db, app);
    require('./remove')(db, app);

    app.listen(PORT, () => {
        console.log(`Starting server at: ${PORT}`);
    });
}

main()
    .catch(console.error);