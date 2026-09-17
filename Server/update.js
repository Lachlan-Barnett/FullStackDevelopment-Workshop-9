const { ObjectId } = require('mongodb');

module.exports = function(db, app) {
    app.post('/api/update', async (req, res) => {
        if (!req.body) {
            return res.sendStatus(400);
        }
        const product = req.body;
        const objectId = new ObjectId(product._id);
        const collection = db.collection('products');

        await collection.updateOne(
            { _id: objectId },
            { $set: { name: product.name, description: product.description, price: product.price, units: product.units } }
        );
        res.send({ ok: product._id });
    });
};