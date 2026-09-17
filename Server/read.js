module.exports = function(db, app) {
    app.get('/api/getlist', async (req, res) => {
        const collection = db.collection('products');
        const docs = await collection.find({}).toArray();
        res.send(docs);
    });
};