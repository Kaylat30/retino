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
    risk: {
        type: Number,
        required: true
    },
    visual: {
        type: Number,
        required: true
    },
    intraocular: {
        type: Number,
        required: true
    },
    serum: {
        type: Number,
        required: true
    },
},{ timestamps: true });

const EyeScreening = mongoose.model('EyeScreening', eyeScreeningSchema);

export default EyeScreening;
