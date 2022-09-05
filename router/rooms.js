const express=require('express');
const router=express.Router();
const roomModule=require('../module/rooms');

router.post('/createRoom',roomModule.createRoom);
router.post('/Roombooking',roomModule.Roombooking);
router.get('/getRooms',roomModule.getRooms);
router.get('/getcustomers',roomModule.getcustomers);

module.exports=router;