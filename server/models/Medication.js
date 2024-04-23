import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    result: {
        type: Number,
    },
    risk: {
        type: Number,
    },
    visual: {
        type: Number,
    },
    intraocular: {
        type: Number,
    },
    serum: {
        type: Number,
    },
    glucose: {
        type: Number,
    },
    hemoglobin: {
        type: Number,
    },
    urinalysis: {
        type: Number,
    },
    
});

const Medication = mongoose.model('Medication', medicationSchema);

export default Medication;
