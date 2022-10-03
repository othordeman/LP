const database = require("../db/database.js");
const ObjectId = require('mongodb').ObjectId;




const user = {


    findUser: async function (req, res) {

        let db;

        try {
            db = await database.getDb();

            let filter = {
                "_id": ObjectId("6336a3c67f8974385fa7c6bc")
            };

            const result = await db.collection.findOne(filter);

            if (result) {
                return res.json({ data: result });
            }
        } catch (e) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/",
                    title: "Database error",
                    detail: e.message
                }
            });
        } finally {
            await db.client.close();
        }
    }
}

module.exports = user;