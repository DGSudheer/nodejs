const express = require("express");
const app = express();

const port = 5001;

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
});

app.get("/register", (req,res) =>{
    console.log("GET request!");
    res.send("GET request!");
});

app.post("/register", (req,res) =>{
    console.log("POST request!");
    res.send("POST request!");
});


