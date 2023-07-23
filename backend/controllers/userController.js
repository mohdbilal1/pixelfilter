import userModel from "../models/schema.js";
import bcrypt from 'bcrypt';

const registController=(req,res)=>{
    res.render('registration');
}
//create new document using model
const createUserDoc=async(req,res)=>{
    try {
     const { name,email,password }= req.body;
     const hashPassword= await bcrypt.hash(password,10);
       const createDoc=new userModel({
        name: name,
        email:email,
        password:hashPassword,
     
       })
       //save document 
       const result=await createDoc.save();
    //    console.log(result)
       res.redirect('/');

    } catch (error) {
        console.log(error);
    }
}

const loginController=(req,res)=>{
    res.render('login');
}
//read documents
const readUserDoc=async(req,res)=>{
    try {
        const {useremail,userpassword}=req.body;
        const result=await userModel.findOne({email:useremail});
        // console.log(result);
        if(result != null){
            const isMatch=await bcrypt.compare(userpassword,result.password);
            if(result.email=== useremail && isMatch){
                // res.send(`<h1>dashboard---- ${result}</h1>`);
                console.log(`dashboard----  ${result}`)
                
            }else{
                // res.send('email or password invalid');
                console.log('email or password invalid')
            }
        }else{
            // res.send('your are not registered user');
            console.log('your are not registered user')
            
        }
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

export {loginController,registController,createUserDoc,readUserDoc};