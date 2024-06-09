const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    // initialize structured field which are required in your App also type.
    // takes id by default
    username: { type: String, required: true },
    title: { type: String,  },
    desc: String,                   //if single defined field then can be define like this without object
    // isEdit: { type: Boolean, default: 1 },
    url: { type: String },
    image: { type: String }
})


const Project=new mongoose.model("Project " , Schema) // it will create database of name project 
module.exports = Project