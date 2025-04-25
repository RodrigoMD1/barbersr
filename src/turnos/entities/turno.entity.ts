import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity'; // aca va cuando haga el resource de clientes 

@Entity()
export class Turno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  servicio: string; // ej: Corte, Barba, Combo

  @Column()
  fecha: Date;

  @Column({ default: 'pendiente' })
  estado: string; // pendiente | confirmado | cancelado | completado

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @ManyToOne(() => Cliente, cliente => cliente.turnos, { eager: true })
  cliente: Cliente;
}