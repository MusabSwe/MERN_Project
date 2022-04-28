import mongoose from 'mongoose'

// A document is contains key-value pairs (like JSON format)
// Documents (Rows) are grouped into collections
// Collections (Tables) are grouped into databases

// Schema is a description of the type of data 
// and its attributes in a document Used to enforce structure
// and rules on data such as id: {type: String, required: true}

// Model defines a collection based on a schema
// Used to create instances of data (i.e., documents)

// Each instance of a model represents a document
// Ex
// const stu1 = new Student({name: "Ali", id:"1", age: 19})

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String], // means array of string
    selectFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage; //not the name of file