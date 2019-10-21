import { Module } from '@nestjs/common';
import { ParkingController } from './Parking/parking.controller'
import { ParkingService } from './Parking/parking.service'
import { CarController } from './Car/car.controller'
import { CarService } from './Car/car.service'
import { CarSchema } from './Car/car.schema'
import { ParkingSchema } from './Parking/parking.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { CarModule } from './Car/car.module';
import { ParkingModule } from './Parking/parking.module';

@Module({
  imports: [ ParkingModule, CarModule],   
  controllers: [],
  providers: [],
})
export class AppModule {}
