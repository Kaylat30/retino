import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema({
    result: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
});

const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;
