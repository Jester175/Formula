import { Schema, model } from 'mongoose';

const Patient = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
})

export default model('PATIENT', Patient);