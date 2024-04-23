import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    date: {
        type: Date,
    },
    clinic: {
        type: String,
    },
    email: {
        type: String,
    },
    number: {
        type: String,
    },
    description: {
        type: String
    },
    message: {
        type: String
    },
    name: {
        type: String,
    },
    result: {
        type: String
    },
    user: {
        type: String,
        required: true
    },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
