const express = require('express');

const app = express();
app.listen(3001, (err)=>{
    if(err)
        console.log(err.message);
    else
        console.log("server started on 3001")
})