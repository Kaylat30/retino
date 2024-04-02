import Appointment from '../models/Appointment'

// Add new appointment
export const addAppointment = async (req, res) => {
    try {
        const {date,clinic,email,number,description,message,name,results} = req.body
        const appointment = new Appointment({date,clinic,email,number,description,message,name,results,user:req.user._id});
        const savedAppointment = await appointment.save();
        res.status(201).json({ message: 'Appointment added successfully',Appointment:savedAppointment });
    } catch (error) {
        res.status(500).json({ success: false,error: error.message });
    }
};

// Get all appointments of logged in user
export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ user: req.user._id });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ success: false,error: error.message });
    }
};

// Update appointment
export const updateAppointment = async (req, res) => {
    try {
        const {id,date,clinic,email,number,description,message,name,results} = req.body
        const updatedAppointment = await Appointment.findByIdAndUpdate(id,
            {date:date,clinic:clinic,email:email,number:number,description:description,message:message,name:name,results:results},
            {new:true});
        res.status(200).json({ message: 'Appointment updated successfully' ,Appointment: updatedAppointment });
    } catch (error) {
        res.status(500).json({ success: false,error: error.message });
    }
};

// Delete appointment
export const deleteAppointment = async (req, res) => {
    try {
        const { id } = req.body;
        await Appointment.findByIdAndDelete(id);
        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false,error: error.message });
    }
};