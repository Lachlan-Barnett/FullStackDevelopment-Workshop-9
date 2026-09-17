module.exports = function(db, app) {
    app.post('/api/add', async (req, res) => {
        if (!req.body) {
            return res.sendStatus(400);
        }
        const product = req.body;
        const collection = db.collection('products');

        const count = await collection.countDocuments({ id: product.id });
        if (count > 0) {
            return res.send({ ok: false, err: 'duplicate item' });
        }

        const result = await collection.insertOne(product);
        res.send({ ok: true, insertedId: result.insertedId });
    });
};