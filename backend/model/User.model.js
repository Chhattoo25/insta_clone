const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, min:3,required: true },
  username: { type: String, required: true },
  email: { type: String,  required: true },
  password: { type: String, min: 8, required: true },
  mobile: { type: Number,  required: true },
  country: { type: String,  required: true },
  gender: { type: String, enum: ["Male", "Female", "Unspecified"] },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;



/*

User data:=>

{
"name":"ayush",
"username":"ayush@123",
"email":"ayush@gmail.com",
"password":"ayush@123",
"mobile":94949949,
"country":"India",
"gender":"male"

}

*/