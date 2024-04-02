import Medication from '../models/Medication';


// Add new medication record
export const addMedication = async (req, res) => {
    try {
        const {result} = req.body;
        const medication = new Medication({result,user:req.user._id});
        const savedMedication = await medication.save();
        res.status(201).json({ message: 'Medication record added successfully', Medication: savedMedication });
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
        const {result,id} = req.body;
        const updatedMedication = await Medication.findByIdAndUpdate(id, 
            {result: result},
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
