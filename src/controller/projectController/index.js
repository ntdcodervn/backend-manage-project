const ProjectModel = require('./../../model/Project');

const AddNewProject = async (req,res) => {
    try {
       
                let {name,description} = req.body;
         
                let createProject = new ProjectModel({name,description});
                let saveObj = await createProject.save();

                console.log(saveObj);
                
                
                if(saveObj) {
                    res.json({
                        status : 200,
                        msg : 'Post Successful'
                    })
                }else {
                    res.json({
                        status : 201,
                        msg : 'Post Failed, please try again'
                    })
                }

        
        

    } catch (error) {
        console.log(error);
        res.status(502).send(' Bad Gateway Error')
    }
}

const UpdateProject = async (req,res) => {
    try {
                let {id,description} = req.body;
         
                let updateProject = await ProjectModel.findByIdAndUpdate(id,{description});

                console.log(updateProject);
                
                
                if(updateProject) {
                    res.json({
                        status : 200,
                        msg : 'Post Successful'
                    })
                }else {
                    res.json({
                        status : 201,
                        msg : 'Post Failed, please try again'
                    })
                }
    } catch (error) {
        console.log(error);
        res.status(502).send(' Bad Gateway Error')
    }
}

const DeleteProjectById = async (req,res) => {
    try {
     
                let {id} = req.params;
                let deleteProject = await ProjectModel.findByIdAndDelete(id);
                console.log();
                if(deleteProject) {
                    res.json({
                        status : 200,
                        msg : 'Delete successful'
                    })
                }else {
                    res.json({
                        status : 201,
                        msg : 'Delete failed, please try again'
                    })
                }
    } catch (error) {
        console.log(error);
        res.status(502).send(' Bad Gateway Error')
    }
}

const GetAllProject = async (req,res) => { 
    try {
        let listProject = await ProjectModel.find();
        res.json({
            status : 200,
            data : listProject
        })
    } catch (error) {
        console.log(error);
        res.status(502).send(' Bad Gateway Error')
    }
}


module.exports = {
    AddNewProject,
    DeleteProjectById,
    GetAllProject,
    UpdateProject
}