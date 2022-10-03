var express = require('express');
var router = express.Router();
const find = require("../src/user.js");



router.get("/", (req, res) => {

    

    const data = {
        data: {
            msg: "Hello World"
        }
    }
    res.json(data);
})


router.get('/user', (req, res) => {

    res.json({
        data:{
            msg: "Got a get req"
        }
    })
})


router.get('/user/:id',
    (req, res) => find.findUser(req, res)
);


// router.get('/user/:id', async (req, res) => {

//     let hej = await find.findUser(req);
    

//     res.json({
//         data:{
//             msg: hej
//         }
//     })
// })


router.post('/user', (req, res) => {
    
    console.log(req.body)

    res.status(201).json({
        data:{
            msg: `201 created `,
            body: req.body
        }
    })
})

router.put("/user", (req, res) => {
    res.status(204).send();

})


router.delete("/user", (req, res) => {
    res.status(204).send();

})


module.exports = router;