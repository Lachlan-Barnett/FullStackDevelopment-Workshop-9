const products = [
    { id: 1, name: '16GB USB', description: '16GB USB flash drive', price: 8.99, units: 30 },
    { id: 2, name: '32GB USB', description: '32GB USB flash drive', price: 14.99, units: 20 },
    { id: 3, name: '64GB USB', description: '64GB USB flash drive', price: 24.99, units: 15 }
];

async function addProducts(db) {
    const collection = db.collection('products');

    await collection.drop().catch(() => {});

    const result = await collection.insertMany(products);
    console.log(`Inserted ${result.intertedCount} products: `);
    console.log(products);
}

module.exports = addProducts;