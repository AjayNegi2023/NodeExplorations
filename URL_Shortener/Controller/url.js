const shortid = require('shortid');
const URL = require("../Model/url")

const generateShortURL = async(req,res)=>{
    const body = req.body;    
    if(!body.url) return res.status(400).json({error : "URL is required "});
    const shortId = shortid();
    console.log("Short id is "+shortId)
    try {
        await URL.create({
            shortID : shortId,
            redirectURL: body.url,
            visitHistory:[]
        });
        return res.json({id:shortId});
    } catch (error) {
        console.error("Error creating short URL:", error);
        return res.status(500).json({error: "Internal Server Error"});
    }

}


module.exports ={
    generateShortURL
}