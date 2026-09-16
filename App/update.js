exports.updateDocument = async function(collection, queryJSON, updateJSON) {
    const result = await collection.updateOne(queryJSON, { $set: updateJSON });
    console.log("for the documents with");
    console.log(queryJSON);
    console.log("SET: ");
    console.log(updateJSON);
    return result;
};