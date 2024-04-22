import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
    desc: String,
    duedate: { type: Date },
    category: String
});

const todolist = mongoose.model("todolist",todoSchema);

export default todolist;