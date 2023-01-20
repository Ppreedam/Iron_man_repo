import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const todoschema = mongoose.Schema({
    name: String,
    
});

autoIncrement.initialize(mongoose.connection);
todoschema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', todoschema);

export default postUser;