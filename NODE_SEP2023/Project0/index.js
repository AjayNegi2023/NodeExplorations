const express = require('express');
const { connectMongoDB } = require("./Connection.js");
const userRouter = require("./routes/user.js")
const {logReqRes}= require('./MiddleWare') //by default it takes index.js

const app = express();
const PORT = 8000;

app.use(express.urlencoded({
    extended: false
}));


//connection Mongo
connectMongoDB('mongodb://localhost:27017/NodeExploration')
    .then(() => {
        console.log("MongoDB connected ")
    })
    .catch((error) => console.log("MongoDB ERROR ", error))

app.use(logReqRes('log.txt'));
app.use('/api/users', userRouter);
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})