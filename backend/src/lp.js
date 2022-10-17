var ObjectId = require('mongodb').ObjectId; 
const database = require("../db/database.js");


// Fetches from database
const lp = {

    getAllLp: async function (req, res) {



        let db;
        
        try {
            db = await database.getDb();
            
            var page = parseInt(req.params.page);
            const result = await db.collection.find({}).sort({Pris:-1}).limit(page).toArray();
            
            if (result) { 
                return res.json({result});
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
    },

    getALp: async function (req, res) {

        try {
            db = await database.getDb();
            const result = await db.collection.find({_id: ObjectId(req.params.id)}).toArray();
            
            if (result) {   
                return res.json({result});
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
    },



    searchAllLp: async function (req, res) {

        let db;

        try {
            db = await database.getDb();
            console.log(req.params)

            const result = await db.collection.find({ $text: { $search: req.params.query}}).toArray();
            if (result) { 
                return res.json({result});
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
    },


}

module.exports = lp;