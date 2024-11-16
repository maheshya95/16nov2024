const express = require('express');
const app = express();
port = 4000;

app.get('/', (req, res)=>{
    res.json({
        msg : 'Welcome to node js'
    });
});

app.listen(port, ()=>{
    console.log(`app listening on port no. ${port}`)
});