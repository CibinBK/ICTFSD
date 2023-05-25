// Importing
const express = require('express');
const { model } = require('mongoose');
const studentSchema = require('./model/studentdb')
//Initialize
const app = new express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//Api create
app.post('/create',(req,res)=>{
    var result = new studentModel(req.body);
    result.save();
    res.send("data added");
})
app.get('/view',(req,res)=>{
    res.json({"name":"Cibin","age":12});
})
//Port
app.listen(8080,()=>{
    console.log("App is running in port:8080")
})