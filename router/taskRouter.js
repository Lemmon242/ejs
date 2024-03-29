const express = require('express');
const router = express.Router();
const TASKS = require('../model/taskModel');
const { create_task, delete_task, single_task, edit_task, edit_page } = require('../controller/taskController');

// post route c -- create
router.post('/create', create_task);
  
  // route params for single page
  router.get('/route/:id',single_task);
  
  // delete route D -- delete
  router.get('/delete/:id',delete_task);

  // edit route E -- edit
  router.get('/editpage/:id', edit_page);

  // update route
  router.post('/edit/:id', edit_task)




  
  
//    // edit
  //  app.get('/api/v1/edit/:id',async (req,res)=>{
  //   const id = req.params.id;
  //   try{
  //       await TASKS.findByIdAndUpdate(id);
  //       res.redirect('/')
  //   }catch(error){
  //       console.log(error);
  //   }
  // })
module.exports = router;  