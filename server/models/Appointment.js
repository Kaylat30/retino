import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    clinic: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    message: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    results: {
        type: String
    },
    user: {
        type: String,
        required: true
    },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
