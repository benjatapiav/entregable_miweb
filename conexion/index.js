const express = require("express");
const path = require("path");
const database = require("./database");
const cors = require("cors");


// Configuracion inicial

const app = express();

app.set("port",400);
app.listen(400,(res,req)=>{
    console.log("Escuchando comunicaciones al puerto 400");
});

//Middleware

app.use(cors({
    origin:["http://127.0.0.1:5502"]
}))

// rutas de registro, login


// Rutas SELECT
app.get("/productos", async (req,res) => {
    const connection = await database.getConnection();
    const result = await connection.query("SELECT * FROM PRODUCTO WHERE id_producto >=1 and id_producto <= 6");
    res.json(result)
    console.log(result)
}) 

app.get("/productos2", async (req,res) => {
    const connection2 = await database.getConnection();
    const result2 = await connection2.query("SELECT * FROM PRODUCTO WHERE id_producto >6 and id_producto <= 12");
    res.json(result2)
    console.log(result2)
}) 

app.get("/productos3", async (req,res) => {
    const connection3 = await database.getConnection();
    const result3 = await connection3.query("SELECT * FROM PRODUCTO WHERE id_producto >12 and id_producto <= 18");
    res.json(result3)
    console.log(result3)
}) 


