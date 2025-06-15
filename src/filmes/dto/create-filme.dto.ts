import { IsString, IsNotEmpty, IsInt, IsPositive, IsUrl, IsDateString } from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  genero: string;

  @IsString()
  @IsNotEmpty()
  classificacao: string;

  @IsInt()
  @IsPositive()
  duracao: number;

  @IsDateString()
  dataEstreia: string;

  @IsString()
  @IsNotEmpty()
  imagemUrl: string;
}