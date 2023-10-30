const mongoose = require('mongoose');


// Define the Post schema
const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}
);

// Register the Post model


module.exports = mongoose.model("Form", formSchema);