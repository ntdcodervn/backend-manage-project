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
                let {id,name,description} = req.body;
         
                let updateProject = await ProjectModel.findByIdAndUpdate(id,{name,description});

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
        let listProject = await ProjectModel.find().populate('member');
        res.json({
            status : 200,
            data : listProject
        })
    } catch (error) {
        console.log(error);
        res.status(502).send(' Bad Gateway Error')
    }
}

const GetDetailProjectById = async (req,res) => { 
    try {
        let {id} = req.params;
        let listProject = await ProjectModel.findById(id).populate('member');
        res.json({
            status : 200,
            data : listProject
        })
    } catch (error) {
        console.log(error);
        res.status(502).send(' Bad Gateway Error')
    }
}

const  AssignMemberToProject = async (req,res) => { 
    try {
        let {idProject,idMember} = req.body;
        let currentProject =  await ProjectModel.findById(idProject);

        if(currentProject) {
            let newMember = currentProject.member;
            let checkMemberExist = newMember.filter((value) => value == idMember);

            if(checkMemberExist.length == 0) {
                newMember.push(idMember);
                let listProject = await ProjectModel.findByIdAndUpdate(idProject,{member : newMember });
                res.json({
                    status : 200,
                    data : 'update success'
                })
            }else{
                res.json({
                    status : 201,
                    data : 'Members have been added in the project'
                })
            }
            
        }else {
            res.json({
                status : 204,
                msg : 'Project not found '
            })
        }
    } catch (error) {
        console.log(error);
        res.status(502).send(' Bad Gateway Error')
    }
}


const RemoveMemberFromProject = async (req,res) => {
    try {
        let {idProject,idMember} = req.body;
        let currentProject =  await ProjectModel.findById(idProject);

        if(currentProject) {
            let newMember = currentProject.member;
            let removeMember = newMember.filter((value) => value != idMember);

            let listProject = await ProjectModel.findByIdAndUpdate(idProject,{member : removeMember });
            res.json({
                status : 200,
                data : 'remove success'
            })
        }else {
            res.json({
                status : 204,
                msg : 'Project not found '
            })
        }
    } catch (error) {
        console.log(error);
        res.status(502).send(' Bad Gateway Error')
    }
}



module.exports = {
    AddNewProject,
    DeleteProjectById,
    GetAllProject,
    UpdateProject,
    GetDetailProjectById,
    AssignMemberToProject,
    RemoveMemberFromProject
}