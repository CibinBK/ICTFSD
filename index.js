// Importing
const express = require('express');
const app = new express();
const { model } = require('mongoose');
const studentModel = require('./model/studentdb')
//Initialize

app.use(express.urlencoded({extended:true}));
app.use(express.json());
//Api create

app.get('/view',(req,res)=>{
    res.json({"name":"Cibin","age":12});
})
//Port
app.listen(3030,(req,res)=>{
    console.log("App is running in port:8080")
})

app.post('/create',(req,res)=>{
    var result = new studentModel(req.body);
    result.save();
    res.send("data added");
})

app.get('/see',(req,res)=>{
    var data = studentModel.find();
    res.json(data);
})