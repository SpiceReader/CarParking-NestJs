import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface'
import { CarCreatingDTO } from './dto/car_creating.dto'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CarService {  
    constructor(@InjectModel('Car') private readonly carModel: Model<Car>)
    {   }

    async getCar(carId): Promise<Car> {
        const car = await this.carModel.findById(carId);
        return car;
    }

    async getAllCars(): Promise<Car[]> {
        const cars = await this.carModel.find()
        return cars;
    }

    async createNewCar(CarDTO: CarCreatingDTO): Promise<Car> {
        const newCar = await this.carModel(CarDTO);
        return newCar.save();
    }

    async deleteCarwithID(carId): Promise<Car>  {
        const deleteCar = await this.carModel.findByIdAndRemove(carId); 
        return deleteCar;  
    }

    async updateCar(carId, CarDTO: CarCreatingDTO): Promise<Car> {
        const updatedCar = await this.carModel.findByIdAndUpdate(carId, CarDTO, { new: true});
        return updatedCar;
    }   
}