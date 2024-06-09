const Project = require("../models/project")

const getAllProject = (req, res) => {
    res.send("get all projects")
}

const createProject = async (req, res) => {
    const { title, desc, image, username, url } = req.body
    const result = await Project.create({ title, desc, image, username, url })
    console.log("result", result)
    res.send(result);
};


const updateProject = (req, res) => {
    res.send("update rpojects")
}

const deleteProject = async (req, res) => {
    const { id } = req.body
    const result = await Project.findByIdAndDelete({ _id: id })
    res.send(result)
}


module.exports =
{
    getAllProject, createProject, updateProject, deleteProject
}

