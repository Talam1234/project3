const loginmodel = require('../model/schema');

const register = ("/api/v1",async ()=>{
        const logindetail = new loginmodel({
            username : req.body.Email,
            password : req.body.Password,
        })
        // console.log(req.body.Email)
        console.log(logindetail);
        await logindetail.save();
        res.send('Credentials saved successfully');
});

const login = ("/api/v1",async ()=>{
        
    const email = req.body.email;
    const passwordhtml = req.body.password;

    const result = await loginmodel.findOne({username: email});
    if(!result){
        return res.send({msg:"invalid user"})
                
    }
    if(result.password !== passwordhtml)
    {
        return res.send({msg:"invalid pass", result})
    }
    else
    {
        res.send("sucess")
        res.redirect('../admin/admin.html')
        res.sendFile('')
    }
})

module.exports = {
    login,register
}