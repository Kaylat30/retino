import Medication from '../models/Medication.js';
import Appointment from '../models/Appointment.js';
import EyeScreening from '../models/EyeScreening.js'
import Checkup from '../models/Checkup.js'


// Add new medication record
export const addMedication = async (req, res) => {
    try {
        const {cat,risk,visual,intraocular,serum,glucose,hemoglobin,urinalysis,result,date,clinic} = req.body;
        //const medication = new Medication({risk,visual,intraocular,serum,glucose,hemoglobin,urinalysis,result,user:req.user._id});
        if(cat == "appointment")
        {
            const appointment = new Appointment({date,clinic,result,user:req.user._id});
            const savedappointment = await appointment.save();

            res.status(201).json({ message: 'Appointment record added successfully',Appointment:savedappointment });
        }else if(cat == "eyescreening")
        {
            const eyescreening = new EyeScreening({date,clinic,risk,visual,intraocular,serum,user:req.user._id});
            const savedeyescreening = await eyescreening.save();

            res.status(201).json({ message: 'EyeScreening record added successfully', EyeScreening: savedeyescreening});
        }else if(cat == "checkup")
        {
            const checkup = new Checkup({date,clinic,glucose,hemoglobin,urinalysis,user:req.user._id});
            const savedcheckup = await checkup.save();

            res.status(201).json({ message: 'Checkup record added successfully',Checkup: savedcheckup });
        }
        //const savedMedication = await medication.save();
        //res.status(201).json({ message: 'Medication record added successfully', EyeScreening: savedeyescreening ,Checkup: savedcheckup ,Appointment:savedappointment });
    } catch (error) {
        res.status(500).json({ success: false,error: error.message });
    }
};


// Get all medication records of logged in user
export const getMedicationRecords = async (req, res) => {
    try {
        const medicationRecords = await Medication.find({ user: req.user._id });
        res.status(200).json(medicationRecords);
    } catch (error) {
        res.status(500).json({ success: false,error: error.message });
    }
};

// Update medication record
export const updateMedicationRecord = async (req, res) => {
    try {
        const {risk,visual,intraocular,serum,glucose,hemoglobin,urinalysis,result,id} = req.body;
        const updatedMedication = await Medication.findByIdAndUpdate(id, 
            {risk:risk,visual:visual,intraocular:intraocular,serum:serum,glucose:glucose,hemoglobin:hemoglobin,urinalysis:urinalysis,result:result},
            {new:true});
        res.status(200).json({ message: 'Medication record updated successfully' ,Medication: updatedMedication });
    } catch (error) {
        res.status(500).json({ success: false,error: error.message });
    }
};

// Delete medication record
export const deleteMedicationRecord = async (req, res) => {
    try {
        const { id } = req.body;
        await Medication.findByIdAndDelete(id);
        res.status(200).json({ message: 'Medication record deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false,error: error.message });
    }
};
