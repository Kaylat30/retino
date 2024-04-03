import mongoose from "mongoose";

const checkupSchema = new mongoose.Schema({
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
    }
});

const Checkup = mongoose.model('Checkup', checkupSchema);

export default  Checkup;
