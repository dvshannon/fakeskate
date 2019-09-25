const mongoose = require('mongoose');

skaterSchema = new mongoose.Schema({
    skaterName: {
        type: String,
        required: true
    },
    skaterFavTrick: {
        type: String,
        required: true
    },
    skaterOrgs: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Skater', skaterSchema)