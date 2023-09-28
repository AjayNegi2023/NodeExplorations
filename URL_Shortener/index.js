const express = require("express");
const urlRoute = require('./Routes/url')
const URL = require('./Model/url')
const {
    connection
} = require('./Connection');


const app = express();
const PORT = 8001;

connection("mongodb://localhost:27017/shortURL")
    .then(() => {
        console.log("DataBase connected Successfully.")
    })
    .catch((error) => console.log("MongoDB error ", error));

app.use(express.json());
app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    // console.log(req.params)
    const shortId = req.params.shortId;
    console.log(shortId);
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },
        },
    });
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
    console.log(`Server Started at Port ${PORT}`);
})