const MemberModel = require('./../../model/Member');

const AddNewMember = async (req,res) => {
    try {
       
                let {name, phone, birthday} = req.body;
         
                let createMember = new MemberModel({name,phone,birthday});
                let saveObj = await createMember.save();

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

const UpdateMember = async (req,res) => {
    try {
                let {id,phone,birthday} = req.body;
         
                let updateMember = await MemberModel.findByIdAndUpdate(id,{phone,birthday});

                console.log(updateMember);
                
                
                if(updateMember) {
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

const DeleteMemberById = async (req,res) => {
    try {
     
                let {id} = req.params;
                let deleteMember = await MemberModel.findByIdAndDelete(id);
                console.log();
                if(deleteMember) {
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

const GetAllMember = async (req,res) => { 
    try {
        let listMember = await MemberModel.find().populate('members');
        res.json({
            status : 200,
            data : listMember
        })
    } catch (error) {
        console.log(error);
        res.status(502).send(' Bad Gateway Error')
    }
}

const GetDetailMemberById = async (req,res) => { 
    try {
        let {id} = req.params;
        let listMember = await MemberModel.findById(id).populate('members');
        res.json({
            status : 200,
            data : listMember
        })
    } catch (error) {
        console.log(error);
        res.status(502).send(' Bad Gateway Error')
    }
}


module.exports = {
    AddNewMember,
    DeleteMemberById,
    GetAllMember,
    UpdateMember,
    GetDetailMemberById
}