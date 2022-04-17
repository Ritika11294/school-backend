const mongoose=require('mongoose')


const classSchema = new mongoose.Schema({
    grades: { type: String, required: true },
    subject: [{ type: String, required: true }],
    section:{type:String,required:true},
    //  teacher_id:[{type:mongoose.Schema.Types.ObjectId,ref:"teacher",required:true }]
},{
    timestamps:true,
    versionKey:false
})


const Class = mongoose.model('class', classSchema)

module.exports=Class

 