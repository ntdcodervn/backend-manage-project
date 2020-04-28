const express = require('express');
const router = express.Router();
const projectController = require('./../../controller/projectController');


router.post('/addNewProject',projectController.AddNewProject);

router.get('/deleteProject/:id',projectController.DeleteProjectById);

router.get('/getAllProject',projectController.GetAllProject);

router.post('/updateProject',projectController.UpdateProject);

router.get('/getDetailProjectById/:id',projectController.GetDetailProjectById);


module.exports = router;