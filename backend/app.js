
//https://masteringjs.io/tutorials/express/express-json
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
const user = require('./routes/user.js');


const app = express();
const port = 3000;

app.use(cors()); //so that different clients can get info, also displays method and path
//below parses incoming JSON requests and puts the parsed data in req.body.
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

// user route
app.use(user);


// This is middleware called for all routes.
// Middleware takes three parameters.
// Since we are using cors, below is not usefull, but if 
// we were to build an own middlewawre one can do as below.
app.use((req, res, next) => {
    console.log(`Metod: ${req.method}`);
    console.log(`PATH: ${req.path}`);
    next();
});


// Add routes for 404 and error handling
// Catch 404 and forward to error handler
// Put this last
app.use((req, res, next) => {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        "errors": [
            {
                "status": err.status,
                "title":  err.message,
                "detail": err.message
            }
        ]
    });
});

//Start server
app.listen(port, () => console.log(`Listening to port ${port}`))