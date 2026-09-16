const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { serverSelectionTimeoutMS: 5000 });

const dbName = 'mydb';

const add = require('./add');
const read = require('./read');
const update = require('./update');
const remove = require('./remove');

const queryJSONf = {};
const queryJSONup = { id: 1 };
const updateJSON = { units: 25 };
const queryJSONdel = { id: 3 };

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('products');

    await collection.drop().catch(() => {
        // ignore error if the collection doesn't exist yet
    });

    await add.insertDocuments(collection, add.docArray);
    await update.updateDocument(collection, queryJSONup, updateJSON);
    await remove.removeDocument(collection, queryJSONdel);
    await read.findDocuments(collection, queryJSONf);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());