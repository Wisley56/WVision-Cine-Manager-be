import { IsString, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateSalaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsInt()
  @Min(1)
  @Max(500)
  capacidade: number;

  @IsString()
  @IsNotEmpty()
  tipo: string;
}