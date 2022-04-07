// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise
// const Schema = mongoose.Schema
// const UserSchema = new Schema({
//     userId : {type: String, require : true, trim : true, unique : true},
//     password : {type: String, require : true, trim : true, unique : true},
//     usernaem : {type : String, require : true, trim : true, unique : true},
//     number : { type: String, require : true, trim : true, unique : true}
// });

// const { mongoose } = require(".");

// const UserSchema = mongoose.model(
//     'user',
//     mongoose.Schema(
//         {

//         }
//     )
// )
// module.exports =  mongoose.model('User', UserSchema);

module.exports = mongoose => {
    const UserSchema = mongoose.model('user',
        mongoose.Schema(
            {   username: String,
                password: String,
                name:String,
                telephone:String
            },{timestamps : true}
        )
    )
    return UserSchema
}