const fetch = require('node-fetch');
const database = require("./database");

/* 
    With no images in our database from the start, 
    the first solution was to get info from our DB and images from discog and combine it, 
    but because of the fetch limit  there would be problems with images not showing and inconsistent outcome for the user, 
    the best option, though not the most fun one, was to copy relevant info from discog api, which this module does

    It fetches and makes a string from our database (Artist and title) and searches for it in
    Discogs database. It then takes the results and saves it in our mongodb database. 
    This means that we dont need to fetch it from two sources later when displaying results.
    Since the Discog api only allow 1 fetch every second a timer had to be used in the loop.
    This module needs to run one time for it to copy the result from discog to our database.
*/

addDiscogInfo() 

    async function addDiscogInfo () {

        let db;

        try {
            db = await database.getDb();

            const result = await db.collection.find({}).toArray();


            if (result) { 

                for(vars of result ) { 
                    
                    let searchString = vars.Artist + vars.Titel;
                    let discog_info = await fetchLpImages(searchString);
                    db.collection.updateOne({_id: vars._id}, {$push:{"discog_info": discog_info}})     
                    await timer(1050);
            }
        }
        } catch (e) {
            console.log("ERROR: ", e)

        } finally {
            await db.client.close();
        }
    }
    
    const timer = ms => new Promise(res => setTimeout(res, ms))


    async function fetchLpImages (search) {

        let response = await fetch(`https://api.discogs.com/database/search?q=${search}&key=NPkenqtMcGtJBhisFHDJ&secret=jZeWccNQZXNBlNAUrnOqCWFDbQYtCyWg`, {
            method: 'GET', 
            headers: {
            'Content-Type': 'application/json'
            },
        });
        console.log(response)
        response = await response.json();
        if (response.results && response.results[0]) {
            return response.results[0];
        } else {
            return "no info";
        }
    }



    