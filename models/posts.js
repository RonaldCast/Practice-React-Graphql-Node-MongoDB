import mongoose from 'mongoose'


const postSchema = mongoose.Schema({
    desc: String,
    by:{
        type:{},
        require: true
    },
    photo: String,
    likedBy:{
        type:[],
        default:[]
    },
    comments: {
        type: [],
        default: []
    },
    created:{
        type: String,
        default: new Date
    }
    
})

const postModel = mongoose.model("Post", postSchema);

export default postModel;
