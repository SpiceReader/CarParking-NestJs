import * as mongoose from 'mongoose';

export const ParkingSchema = new mongoose.Schema({
    name: String,
    capacity: Number,
    car: Array,
    workingTimeStarts: Date,
    workingTimeEnd: Date, 
})