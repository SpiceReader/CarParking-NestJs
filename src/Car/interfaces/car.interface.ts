import { Document } from 'mongoose';

export interface Car extends Document {
    readonly brand: string;
}