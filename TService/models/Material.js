const mongoose= require('mongoose');
const MaterialSchema=mongoose.Schema({
   Types:{
        type: String,
       
    },
    NameMaterial:{
        type: String,
       
    },
    quantity:{
        type: Number,
     
    },
    price:{
        type: Number,
       
    },
    createDate:{
        type: Date,
        default: Date.now(),
    }
});

module.exports=mongoose.model("Material",MaterialSchema);