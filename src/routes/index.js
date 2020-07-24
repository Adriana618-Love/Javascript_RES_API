const  { Router } = require('express');
const router = Router();

//routes
router.get('/test',(req,res)=>{
    const data = {
        "name":"Alonso",
        "apellido":"Valdivia"
    };
    res.json(data);
});

module.exports = router;