import { CreateMovieDTO } from './create-movie.dto';
import { IsString } from 'class-validator';
import { IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
