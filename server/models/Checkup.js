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
    glucose: {
        type: Number,
        required: true
    },
    hemoglobin: {
        type: Number,
        required: true
    },
    urinalysis: {
        type: Number,
        required: true
    },
},{ timestamps: true });

const Checkup = mongoose.model('Checkup', checkupSchema);

export default  Checkup;
