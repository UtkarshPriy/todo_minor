
import mongoose  from 'mongoose';

mongoose.connect('mongodb://localhost/todo_list_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting db'));

db.once('open',()=>{
    console.log('db connect!!')
});

export default db;