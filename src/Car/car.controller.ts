import { Controller, Get, Delete, Param, Post, Put, Body, Res, HttpStatus, Query} from '@nestjs/common';
//import { AppService } from './app.service';
import { CarService } from './car.service'
import { CarCreatingDTO } from './dto/car_creating.dto'



@Controller('car')
export class CarController {
  //constructor(private readonly appService: AppService) {}
  constructor(private readonly carService: CarService) {}

  @Get('car')
  async getAllCars(@Res() res) {
     const parkings = await this.carService.getAllCars();
     return res.status(HttpStatus.OK).json(parkings);
  }

  @Get('car/:carId')
  async getCarwithId(@Res() res, @Param('carId') carId){
    const car = await this.carService.getCar(carId);
    return res.status(HttpStatus.OK).json(car);
  }

  @Post('/create')
  async createCar(@Res() res, @Body() CarDTO: CarCreatingDTO) {
    const parking = await this.carService.createNewCar(CarDTO);
    return res.status(HttpStatus.OK).json({
      message: "Car has been created successfully", parking
    })
  }

  @Put('/update')
  async updateCar(@Res() res, @Query('carId') carId, @Body() CarDTO: CarCreatingDTO) {
    const car_creating = await this.carService.updateCar(carId, CarDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Car has been successfully updated', car_creating
    });
  }

  @Delete('/delete')
  async deleteCar(@Res() res, @Query('carId') carId) {
    const car = await this.carService.deleteCarwithID(carId);
    return res.status(HttpStatus.OK).json({
      message: 'Car has been deleted', car
    })
  }
}