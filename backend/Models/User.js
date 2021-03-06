//======================================================
// Dependencies
//======================================================

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//======================================================
// User Model (login info? grab naim and email if not specific to one method {FB/Google} )
//======================================================

const userSchema = new Schema({
    
    // May not need with FB login
    email: { 
      type: String,
       required: true
    },
    // May not need with FB login
    name: {
       type: String, 
       required: true 
    },
    uidFB: {
        type: Number,
        required: true
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    // Key to the user model
    favorites: [
        {
            type: Schema.Types.ObjectId,
            ref: "Recipe"
        }
    ],
    pantryList: [
        {
            type: Schema.Types.ObjectId,
            ref: "PantryItem"
        }
    ]
    
});

const User = mongoose.model("User", userSchema);

module.exports = User;