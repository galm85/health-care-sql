const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

//routes
const doctorsRouter = require('./routes/doctorsRouts');
const clinicsRouter = require('./routes/clinicsRouts');
const usersRouter = require('./routes/usersRouts');


app.use(express.json());
app.use(cors());


app.use('/doctors',doctorsRouter);
app.use('/clinics',clinicsRouter);
app.use('/users',usersRouter);


app.get('/',(req,res)=>{
    res.send('root');
})

app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}`));