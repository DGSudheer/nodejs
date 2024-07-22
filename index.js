const express = require("express");
const app = express();

const port = 5001;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
});

app.get("/register", (req,res) =>{
    console.log("GET request!");    
    const {user, password} = req.query;
//    console.log(req.params);
    res.send(`GET request - Welcome ${user}!`);
});

app.post("/register", (req,res) =>{
    console.log("POST request!");
    const {user, password} = req.body;
    res.send(`POST request - Welcome ${user}!`);
});


