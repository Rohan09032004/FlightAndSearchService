const express = require("express");

const { PORT } = require('./config/serverconfig');

const setupStartServer = async() =>{

    const app=express();
    app.listen(PORT,()=> {
        console.log(`Server started at ${PORT}`);
    });
}
setupStartServer();

