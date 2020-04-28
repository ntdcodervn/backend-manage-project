const express = require('express');
const router = express.Router();
const MemberController = require('./../../controller/memberController');


router.post('/addNewMember',MemberController.AddNewMember);

router.get('/deleteMember/:id',MemberController.DeleteMemberById);

router.get('/getAllMember',MemberController.GetAllMember);

router.post('/updateMember',MemberController.UpdateMember);

router.get('/getDetailMemberById/:id',MemberController.GetDetailMemberById);


module.exports = router;