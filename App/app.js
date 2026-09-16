const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'mydb';

const add = require('./add');
const read = require('./read');
const update = require('./update');
const remove = require('./remove');

const queryJSONf = {};
const queryJSONup = { id: 1 };
const updateJSON = { units: 25 };
const queryJSONde1 = { id: 3 };

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('products');
    
    collection.drop(() => {
        add.insertDocuments(collection, add.docArray, () => {
            update.updateDocument(collection, queryJSONup, updateJSON, () => {
                remove.removeDocument(collection, queryJSONde1, () => {
                    read.findDocuments(collection, queryJSONf, () => { 
                        client.close();
                    });
                });
            });
        });
    });

    return 'done.';
}

main()
    .catch(console.error)