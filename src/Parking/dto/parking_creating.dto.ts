export class ParkingCreatingDto {
    readonly name: string;
    readonly capacity: number;
    readonly cars: Array<string>;
    readonly workingTimeStarts: Date;
    readonly workingTimeEnds: Date;
  }