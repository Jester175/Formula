import { Schema, model } from 'mongoose';

const Doctor = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    schedule: {
        weekdays: [
            {
                title: { type: String, required: true },
                time: { type: String, required: true }
            }
        ],
        weekends: [
            {
                title: { type: String, required: true },
                time: { type: String, required: true }
            }
        ],
        lunch: { type: String, required: true }
    },
    appointments: [{
        patient: { type: ObjectId, ref: 'Patient' },
        date: { type: Date, required: true },
        time: { type: String, required: true }
    }]
})

export default model('DOCTOR', Doctor);