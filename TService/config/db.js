const mongoose = require("mongoose");
url="mongodb+srv://Gestiondestock:Gestiondestock1234@cluster0.zht5cbu.mongodb.net/?retryWrites=true&w=majority"
require("dotenv").config();
const connecterDB = async () => {
   
  try {
    await mongoose.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("db is connected");
  } catch (error) {
    console.log("failed to connect to db ");
  }
};
module.exports = connecterDB;
