const mongoose = require('mongoose')
const student = require('./student')
const teacher = require('./teacher')

const studDataSchema = new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:student,
    },
    teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:teacher,
    },
    subject:{
        type:String,
    },
    marks:{
        type:Number,
    }
})

module.exports =  mongoose.models['StudData'] || mongoose.model('StudData',studDataSchema) 