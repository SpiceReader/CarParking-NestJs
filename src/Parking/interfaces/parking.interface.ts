import { Document } from 'mongoose';

export interface Parking extends Document {
    readonly type: string;
    readonly capacity: string;
    readonly cars: Array<string>;
    readonly workingTimeStart: Date;
    readonly workingTimeEnd: Date;
}