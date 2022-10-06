const mongo = require("mongodb").MongoClient;
const config = require('./config.json')

/* This connects to the database, and returns collection and client. */
const database = {
    getDb: async function getDb () {

        let dns = config.dns;
    
        // if (process.env.NODE_ENV === 'test') {
        //     dns = "mongodb://localhost:27017/";
        // }

        const client = await mongo.connect(dns, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = await client.db();
        const collection = await db.collection(config.collectionName);

        return {
            collection: collection,
            client: client
        }

    }   
};

module.exports = database;