const { MongoClient } = require('mongodb');
const addProducts = require('./add');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'mydb';

async function main() {
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    
    await addProducts(db);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());