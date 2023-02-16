import { IsString } from 'class-validator';
import { IsNumber } from 'class-validator';
import { IsOptional } from 'class-validator/types/decorator/common/IsOptional';

export class CreateMovieDTO {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
