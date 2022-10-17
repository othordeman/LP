var express = require('express');
var router = express.Router();
const lp = require("../src/lp.js");



// router.get("/", (req, res) => {

    

//     const data = {
//         data: {
//             msg: "Hello World"
//         }
//     }
//     res.json(data);
// })


//Every lp
router.get('/:page', (req, res) => lp.getAllLp(req, res));

//ONE lp
router.get('/lp/:id', (req, res) => lp.getALp(req, res));

router.get('/search/:query/', (req, res) => lp.searchAllLp(req, res));


// router.post('/lp', (req, res) => {
    
//     res.status(201).json({
//         data:{
//             msg: `201 created `,
//             body: req.body
//         }
//     })
// })

// router.put("/lp", (req, res) => {
//     res.status(204).send();

// })


// router.delete("/lp", (req, res) => {
//     res.status(204).send();

// })


module.exports = router;