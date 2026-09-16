exports.removeDocument = async function(collection, queryJSON) {
    const result = await collection.deleteOne(queryJSON);
    console.log("Removed the documents with");
    console.log(queryJSON);
    return result;
};