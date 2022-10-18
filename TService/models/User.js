// const mongoose= require('mongoose');
// var userSchema=mongoose.Schema({
//     FirstName:{type:String,required:true},
//     LastName:{type:String,required:true},
//     Email:{type:String,required:true},
//     Password:{type:String,required:true}
// })
// var User=module.exports=mongoose.model('User',userSchema);
// const mongoose= require('mongoose');
// var Schema=mongoose.Schema;
// var bcrypt=require('bcrypt');
// var Schema=new Schema({email:{
//     type:String,require:true},
//     name:{type:String,require:true},
//     password:{type:String,require:true},
//     creation_dt:{type:Date,require:true}
// });
// schema.statics.hashPassword=function hashPassword(password){
//     return bcrypt.hashSync(password,10);
// }
// schema.methods.isValid=function(hashedpassword){
//     return bcrypt.compareSync(hashedpassword,this.password);
// }
// module.exports=mongoose.model('User',schema);

const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email   : String
}, {
    timestamps: true
});

module.exports = model('User', userSchema, 'users');