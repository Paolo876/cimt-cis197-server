const express = require('express');
const app = express(); //initialize express
const cors = require("cors");
const db = require("./models"); //import tables from models folder

app.use(express.json());
// app.use(cors());    //to allow api connection from computer to react project
app.use(cors(
    {
        credentials: true, 
        origin:  "http://localhost:3000",
        methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
        preflightContinue: true,
        allowedHeaders: ['Content-Type', 'Authorization', "Cookie"],
}));//to allow api connection from computer to react project

// routers
app.use("/auth", require("./routes/Users"));

// connect to port 3001
db.sequelize.sync().then(()=> {
    app.listen(process.env.PORT || 3001, ()=> {
        console.log("LISTENING TO PORT 3001")
    })    
}).catch(err => {
    console.log(err)
})