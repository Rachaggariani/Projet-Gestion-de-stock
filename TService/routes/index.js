// var express=require('express');
// // var router=express.Router();
// // router.get('/',function(req,res,next){
// //     res.send('respond with a resource');
// // });
// var User=require('../models/User');
// router.post('/Register',function(req,res,nest){
// addToDB(req,res);
// });
// async function addToDB(req,res){
//     var user=new User({
//         email:req.body.email,
//         name:req.body.name,
//         password:User.hashPassword(req.body.password),
//         creation_dt:Date.now()
//     });
//     try{
//         doc=await user.save();
//         return res.status(201).json(doc);

//     }
//     catch(err){
//         return res.status(501).json(err);
//     }
// }
// module.exports=router;

const { Router } = require('express');
const router = Router();

const User = require('../models/User');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('hello')
});

router.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;
    const newUser = new User({username, password, email});
    await newUser.save();
		const token = await jwt.sign({_id: newUser._id}, 'secretkey');
    res.status(200).json({token});
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({username});
    if (!user) return res.status(401).send('The email doen\' exists');
    if (user.password !== password) return res.status(401).send('Wrong Password');

		const token = jwt.sign({_id: user._id}, 'secretkey');

    return res.status(200).json({token});
});

// async function verifyToken(req, res, next) {
// 	try {
// 		if (!req.headers.authorization) {
// 			return res.status(401).send('Unauhtorized Request');
// 		}
// 		let token = req.headers.authorization.split(' ')[1];
// 		if (token === 'null') {
// 			return res.status(401).send('Unauhtorized Request');
// 		}

// 		const payload = await jwt.verify(token, 'secretkey');
// 		if (!payload) {
// 			return res.status(401).send('Unauhtorized Request');
// 		}
// 		req.userId = payload._id;
// 		next();
// 	} catch(e) {
// 		//console.log(e)
// 		return res.status(401).send('Unauhtorized Request');
// 	}
// }

module.exports = router;
