const {MongoClient}=require('mongodb');

module.exports={
    slectedDb:{},
    async connect(){
        try{
           const client=await MongoClient.connect(process.env.MONGO_DB);
           this.slectedDb=client.db("HallBooking");
        //    console.log("hi",this.slectedDb);
        }
        catch(err){
            console.log(err)
        }
    }
}