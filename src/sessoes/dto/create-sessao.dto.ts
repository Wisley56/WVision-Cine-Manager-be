import { IsString, IsNotEmpty, IsDateString, IsNumber, IsPositive } from 'class-validator';

export class CreateSessaoDto {
  @IsDateString()
  dataHora: string;

  @IsNumber()
  @IsPositive()
  preco: number;

  @IsString()
  @IsNotEmpty()
  idioma: string;

  @IsString()
  @IsNotEmpty()
  formato: string;

  @IsString()
  @IsNotEmpty()
  filmeId: string;

  @IsString()
  @IsNotEmpty()
  salaId: string;
}