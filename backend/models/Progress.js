const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({

    uid:{
        type:String,
        required:true,
    },

    stage:{
        type:String,
        required:true,
    },

    submittedCode:{
        type:String,
        required:true,
    },

    review:{
        type:String,
        required:true,
    },

    score:{
        type:Number,
        default:0,
    },

    completed:{
        type:Boolean,
        default:false,
    },

    attempts:{
        type:Number,
        default:1,
    },

    submittedAt:{
        type:Date,
        default:Date.now,
    }

});

module.exports=mongoose.model("Progress",ProgressSchema);