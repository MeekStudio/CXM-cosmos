require('dotenv').config();

const { MongoClient } = require('mongodb');
const connection_string = process.env.CXM_COSMOS_DATABASE_CONNECTION_STRING;

const client = new MongoClient(connection_string);

const connect = ({database = null, collection = null} = {}) => {

    if(!database || !collection){
        throw new Error("CXM-cosmos/use()\nMissing argument(s):\n\tdatabase OR collection\n");
    }

    return client.db(database).collection(collection)
}

module.exports = {connect}