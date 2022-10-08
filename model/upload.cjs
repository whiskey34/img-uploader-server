const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
    url: {
        type: String,
    },
    cloudinary_id: {
        type: String,
    }
});

module.exports = mongoose.model("Upload", uploadSchema);