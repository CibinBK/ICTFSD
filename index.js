// Importing
const express = require('express');
const app = new express();
const { model } = require('mongoose');
const studentModel = require('./model/studentdb')
const cors = require('cors');
//Initialize

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
//Api create

app.get('/view',(req,res)=>{
    res.json({"name":"Cibin","age":12});
})
app.post('/create',(req,res)=>{
    var result = new studentModel(req.body);
    result.save();
    res.send("data added");
})

app.get('/see',async(req,res)=>{
    var data = await studentModel.find();
    res.json(data);
})

app.delete('/delete/:names',async(req,res)=>{
    let id = req.params.id;
    await studentModel.findOneAndDelete({name:'names'});
    res.send("Deleted the data");
})
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id;
    await studentModel.findByIdAndUpdate(id,req.body);
    res.send("Updated the data");
})

//Port
app.listen(3030,(req,res)=>{
    console.log("App is running in port:3030")
})
