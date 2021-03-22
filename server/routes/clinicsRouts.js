const router = require('express').Router();
const db = require('../config/db');


//get all doctors
router.get('/',async(req,res)=>{
    await db.query("SELECT * FROM clinics",(err,result)=>{
        if(err){
           return res.send(err)
        }
        return res.send(result);
    })
})


module.exports = router;