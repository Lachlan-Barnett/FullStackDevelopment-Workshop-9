const { ObjectId } = require('mongodb');

module.exports = function(db, app) {
    app.post('/api/delete', async (req, res) => {
        if (!req.body) {
            return res.sendStatus(400);
        }
        const objectId = new ObjectId(req.body._id);
        const collection = db.collection('products');

        await collection.deleteOne({ _id: objectId });
        const docs = await collection.find({}).toArray();
        res.send(docs);
    });
};