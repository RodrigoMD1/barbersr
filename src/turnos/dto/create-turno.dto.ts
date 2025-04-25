import { IsNotEmpty, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateTurnoDto {
  @IsString()
  @IsNotEmpty()
  servicio: string;

  @IsDateString()
  fecha: string;

  @IsNumber()
  precio: number;

  @IsNotEmpty()
  clienteId: number;
}