exports.findDocuments = async function(collection, queryJSON) {
    const docs = await collection.find(queryJSON).toArray();
    console.log("Found the following records:");
    console.log(docs);
    return docs;
};