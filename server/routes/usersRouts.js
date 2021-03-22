const router = require('express').Router();
const db = require('../config/db');


//get all users
router.get('/',async(req,res)=>{
    await db.query("SELECT * FROM users",(err,result)=>{
        if(err){
           return res.send(err)
        }
        return res.send(result);
    })
})

//Post new doctor
router.post('/',async(req,res)=>{
    // const email  = await db.query(`SELECT * FROM users WHERE email=${req.body.email}`);
    // console.log(email);
    // if(email){
    //     return res.send('Email is already taken');
    // }
    const user = req.body;
    await db.query("INSERT INTO users (firstName,lastName,email,password,phone,address,city,birthYear,image,role) Values (?,?,?,?,?,?,?,?,?,?)",
    [user.firstName,user.lastName,user.email,user.password,user.phone,user.address,user.city,user.birthYear,user.image,user.role],
    (err,result)=>{
        if(err){
            return res.send(err);
        }
        return (res.send('New User added'))
    })
})


router.post('/sign-in',async(req,res)=>{
    
     db.query(`SELECT * FROM users WHERE email='${req.body.email}'`,(err,result)=>{
        if(err || result.length===0){
            return res.status(401).send("Wrong Email");
        }else{
            let user = result[0];
            if(user.password !== req.body.password){
                 return res.status(401).send('Worng Password');
            }

           return res.status(200).send({
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                image:user.image,
                role:user.role,
                id:user.id,
                birthYear:user.birthYear
            })
        }
    });
    
  
})


// Remove user by id
router.delete('/:id',(req,res)=>{
    db.query(`DELETE FROM users WHERE id=${req.params.id}`);
})


//add apointment 
router.post('/add-appointment/:id',(req,res)=>{
    db.query(`SELECT * FROM users WHERE id='${req.params.id}'`,(err,result)=>{
        if(err){
            return res.status(400).sand(err);
        }
        
        let user = result[0];
        user.apointment = req.body;
        
        return res.send(user);
        
        db.query(`UPDATE users SET apointment='${apointment}' WHERE id=${req.params.id}`)
        res.send('new appointment added');

    })
})


module.exports = router;