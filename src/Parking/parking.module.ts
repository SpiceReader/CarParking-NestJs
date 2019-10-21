import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParkingController } from './parking.controller';
import { ParkingService } from './parking.service';
import { ParkingSchema} from './parking.schema'

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'Parking', schema: ParkingSchema }])],
  controllers: [ParkingController],
  providers: [ParkingService],
})
export class ParkingModule {}