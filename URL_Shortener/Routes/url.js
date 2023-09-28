const express = require("express");
const {generateShortURL} = require("../Controller/url")
const router= express.Router();

router.post("/",generateShortURL);


module.exports = router;