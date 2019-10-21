import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Parking } from './interfaces/parking.interface';
import { ParkingCreatingDto } from './dto/parking_creating.dto';

@Injectable()
export class ParkingService {
    constructor(@InjectModel('Parking') private readonly parkingModel: Model<Parking>)
    {   }

    async getParking(parkingId): Promise<Parking> {
        const parking = await this.parkingModel.findById(parkingId);
        return parking;
    }

    async getAllParking(): Promise<Parking[]> {
        const parkings = await this.parkingModel.find()
        return parkings;
    }

    async createNewParking(ParkingDTO: ParkingCreatingDto): Promise<Parking> {
        const newParking = await this.parkingModel(ParkingDTO);
        return newParking.save();
    }

    async deleteParkingwithID(parkingId): Promise<Parking> {
        const deletedParking = await this.parkingModel.findByIdAndRemove(parkingId); 
        return deletedParking;  
    }

    async updateParking(parkingId, ParkingDTO: ParkingCreatingDto): Promise<Parking> {
        const updatedParking = await this.parkingModel.findByIdAndUpdate(parkingId, ParkingDTO, { new: true});
        return updatedParking;
    }   
}