const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},
{
    timestamps: true,
});


userSchema.pre('save', async function (next){
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model("admin", userSchema);
module.exports = User;