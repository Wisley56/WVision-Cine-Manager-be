import { IsString, IsNotEmpty } from 'class-validator';
import { IsCPF } from 'class-validator-cpf';
import { ValidationMetadata } from 'class-validator/types/metadata/ValidationMetadata';

export class CreateIngressoDto {
  @IsString()
  @IsNotEmpty()
  nomeCliente: string;

  @IsString()
  @IsNotEmpty()
  @IsCPF()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  assento: string;

  @IsString()
  @IsNotEmpty()
  tipoPagamento: string;

  @IsString()
  @IsNotEmpty()
  sessaoId: string;
}