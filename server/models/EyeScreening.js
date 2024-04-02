import mongoose from "mongoose";

const eyeScreeningSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    clinic: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    results: {
        type: String,
        required: true
    },
    risk: {
        type: String,
        required: true
    }
});

const EyeScreening = mongoose.model('EyeScreening', eyeScreeningSchema);

module.exports = EyeScreening;
