var express = require('express');
var router = express.Router();

router.get("/", (req, res, next) => {
    res.send("API is working properly");
});

router.put('/', (req,res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
  })

module.exports = router;