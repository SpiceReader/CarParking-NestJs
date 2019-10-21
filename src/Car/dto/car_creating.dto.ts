import { IsNotEmpty} from 'class-validator'

export class CarCreatingDTO {
    @IsNotEmpty()
    readonly brand: string;
  }