var express = require('express');
var router = express.Router();

/* GET streetcar data. 
   Tells express that if it receives an HTTP GET request to /api/steetcars, 
   keep processing it, otherwise return 404*/
router.get('/', function(req, res) {
    res.status(200).json({ message: "I'm the streetcars route! 🚃 🚃 🚃 " });
});

module.exports = router;