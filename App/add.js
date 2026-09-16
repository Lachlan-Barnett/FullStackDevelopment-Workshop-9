const docArray = [
    { id: 1, name: '16GB USB', description: '16GB USB flash drive', price: 8.99, units: 30 },
    { id: 2, name: '32GB USB', description: '32GB USB flash drive', price: 14.99, units: 20 },
    { id: 3, name: '64GB USB', description: '64GB USB flash drive', price: 24.99, units: 15 }
];

exports.insertDocuments = function(collection, docArray, callback) {
    collection.insertMany(docArray, function(err, result) {
        console.log("Inserted the following documents into the collection:");
        console.log(docArray);
        callback(result);
    });
};