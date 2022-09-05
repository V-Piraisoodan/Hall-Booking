const mongodb=require('../shared');

module.exports.createRoom=async (req,res,next)=>{
   try{
     const response=await mongodb.slectedDb.collection('CreateRooms').insertOne(req.body);
     res.send(response);
    }
   catch(err){
       console.log(err);
   }
}

module.exports.Roombooking=async (req,res,next)=>{
    try{
      const response=await mongodb.slectedDb.collection('Roombooking').insertOne(req.body);
      res.send(response);
     }
    catch(err){
        console.log(err);
    }
 }

 module.exports.getRooms=async (req,res,next)=>{
    try{
      const response=await mongodb.slectedDb.collection('CreateRooms').aggregate([
       { $lookup: {
               from: "Roombooking",
               localField: "Room ID",
               foreignField: "CreateRoomId",
               as: "ListAllRoom"
             }},
             {
              $unwind: '$ListAllRoom'
            },{
            $project:{
              Roomname:'$ListAllRoom.Room ID',
              bookedStatus:"",
              customerName:"$ListAllRoom.Customer name",
              date:"$ListAllRoom.Date",
              startTime:"$ListAllRoom.Start time",
              endTIme:"$ListAllRoom.End time"
          }}
    ]).toArray();
      res.send(response);
     }
    catch(err){
        console.log(err);
    }
 }

 module.exports.getcustomers=async (req,res,next)=>{
    try{
      const response=await mongodb.slectedDb.collection('CreateRooms').aggregate([
        {
        $lookup: {
               from: "Roombooking",
               localField: "Room ID",
               foreignField: "Room ID",
               as: "Listcustomers"
              }},
              {
                $unwind: '$Listcustomers'
              },{
              $project:{
                roomname:'$Listcustomers.Room ID',
                customerName:"$Listcustomers.Customer name",
                date:"$Listcustomers.Date",
                startTime:"$Listcustomers.Start time",
                endTIme:"$Listcustomers.End time"
            }}
    ]).toArray();
      res.send(response);
     }
    catch(err){
        console.log(err);
    }
 }