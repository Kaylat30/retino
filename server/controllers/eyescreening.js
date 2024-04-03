import EyeScreening from '../models/EyeScreening.js'

// Add new eye screening
export const addEyeScreening = async (req, res) => {
    try {
        const {date,clinic,results,risk} = req.body
        const eyeScreening = new EyeScreening({date,clinic,user:req.user._id,results,risk});
        const savedeyScreening = await eyeScreening.save();
        res.status(201).json({ message: 'Eye screening added successfully',EyeScreening:savedeyScreening });
    } catch (error) {
        res.status(500).json({ success: false,error: error.message });
    }
};

// Get all eye screenings of logged in user
export const getEyeScreenings = async (req, res) => {
    try {
        const eyeScreenings = await EyeScreening.find({ user: req.user._id });
        res.status(200).json(eyeScreenings);
    } catch (error) {
        res.status(500).json({ success: false,error: error.message });
    }
};

// Update eye screening
export const updateEyeScreening = async (req, res) => {
    try {
        const {EyeScreeningId,date,clinic,results,risk} = req.body
        const updatedEyeScreening = await EyeScreening.findByIdAndUpdate(EyeScreeningId,
            {date: date, clinic: clinic, results: results, risk: risk},
            {new:true});
        res.status(200).json({ message: 'Eye screening updated successfully',EyeScreening: updatedEyeScreening});
    } catch (error) {
        res.status(500).json({ success: false,error: error.message });
    }
};

// Delete eye screening
export const deleteEyeScreening = async (req, res) => {
    try {
        const { EyeScreeningId } = req.body;
        await EyeScreening.findByIdAndDelete(EyeScreeningId);
        res.status(200).json({ message: 'Eye screening deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false,error: error.message });
    }
};
