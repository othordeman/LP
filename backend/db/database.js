const mongo = require("mongodb").MongoClient;
const config = require('./config.json')
const collectionName = "LP-1"

const database = {
    getDb: async function getDb () {

        let dsn = 'mongodb://localhost:27017/LP';
    
        // if (process.env.NODE_ENV === 'test') {
        //     dsn = "mongodb://localhost:27017/";
        // }



        const client = await mongo.connect(dsn, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = await client.db();
        const collection = await db.collection(collectionName);
        console.log(collection)
        return {
            db: db,
            collection: collection,
            client: client
        }

    }   
};

module.exports = database;