const express = require('express');
const { getAllProject, updateProject, deleteProject, createProject } = require('../controllers/project');
const router = express.Router() ; //store router in a variable 


//CRUD Operations , main URL's 
router
    .get("/" , getAllProject)      // getting/connecting the controllers function in routes 
    .post("/add" , createProject)
    .delete("/" , deleteProject)
    .post("/:id" , updateProject)

module.exports = router;
