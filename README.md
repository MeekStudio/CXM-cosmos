# CXM-cosmos

Need the following environment variables:
CXM_COSMOS_DATABASE_CONNECTION_STRING = "mongodb://........"



// Include the module
const cosmos = require(PATH_TO_MODULE);


// Get a MongoDB client instance for the specified database and collection
const squid = cosmos.connect({
    database: "vanillacx-database",
    collection: "squid"
});

// Querying the database (async call show hows to handle result with then() function)
squid.findOne({
    squid: "caa02e58-1b20-4e2b-b22f-72e347c30d55"
}).then(result => console.log("squid2:", result))

// Simple query
squid.findOne({
    squid: "caa02e58-1b20-4e2b-b22f-72e347c30d55"
})