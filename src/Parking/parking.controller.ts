import { Controller, Get, Delete, Param, Post, Put, Body, Res, HttpStatus, Query} from '@nestjs/common';
//import { AppService } from './app.service';
import { ParkingService } from './parking.service'
import { ParkingCreatingDto } from './dto/parking_creating.dto'



@Controller('parking')
export class ParkingController {
  //constructor(private readonly appService: AppService) {}
  constructor(private readonly parkingService: ParkingService) {}

  @Get('parking')
  async getAllParkings(@Res() res) {
     const parkings = await this.parkingService.getAllParking();
     return res.status(HttpStatus.OK).json(parkings);
  }

  @Get('parking/:parkingId')
  async getParkingwithId(@Res() res, @Param('parkingId') parkingId){
    const parking = await this.parkingService.getParking(parkingId);
    return res.status(HttpStatus.OK).json(parking);
  }

  @Post('/create')
  async createParking(@Res() res, @Body() ParkingDTO: ParkingCreatingDto) {
    const parking = await this.parkingService.createNewParking(ParkingDTO);
    return res.status(HttpStatus.OK).json({
      message: "Parking has been created successfully", parking
    })
  }

  @Put('/update')
  async updateParking(@Res() res, @Query('parkinId') parkingId, @Body() ParkingDTO: ParkingCreatingDto) {
    const parking = await this.parkingService.updateParking(parkingId, ParkingDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Parking has been successfully updated', parking
    });
  }

  @Delete('/delete')
  async deleteParking(@Res() res, @Query('parkingId') parkingId) {
    const parking = await this.parkingService.deleteParkingwithID(parkingId);
    return res.status(HttpStatus.OK).json({
      message: 'Parking has been deleted', parking
    })
  }
}
