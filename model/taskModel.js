// Require mongoose
// From mongoose, we use a method called Schema. This defines the structure of the document that we would store in the collection. model is used to wrap the  Schema and then sends it to the DB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    task:{
        type:String,
        required:true

    },
    title:{
        type:String,
        required:true
    }
},{timestamps:true})

// Lets create our model(Model is with surrounds the Schema and procides us with an interface by which to communicate with our database)
const TASKS = mongoose.model('Task',taskSchema);
module.exports = TASKS
