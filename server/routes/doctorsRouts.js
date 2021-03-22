const router = require('express').Router();
const db = require('../config/db');


//get all doctors
router.get('/',async(req,res)=>{
    await db.query("SELECT * FROM doctors d JOIN clinics c ON d.clinic_id = c.id",(err,result)=>{
        if(err){
           return res.send(err)
        }
        return res.send(result);
    })
})

//Post new doctor
router.post('/',async(req,res)=>{
    const doctor = req.body;
    await db.query("INSERT INTO doctors (name,clinic_id,city,phone,email,type,houres) Values (?,?,?,?,?,?,?)",
    [doctor.name,doctor.clinic_id,doctor.city,doctor.phone,doctor.email,doctor.type,doctor.houres],
    (err,result)=>{
        if(err){
            return res.send(err);
        }
        return (res.send('New Doctor added'))
    })
})


module.exports = router;