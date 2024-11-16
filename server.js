const express = require('express');
const app = express();
port = 4000;

app.get('/', (req, res)=>{
    res.send('hello world Mahesh Yadav yhhddd gty6yrrr');
});

app.listen(port, ()=>{
    console.log(`app listening on port no. ${port}`)
});