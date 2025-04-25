import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Turno } from '../../turnos/entities/turno.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  telefono: string;

  @Column({ nullable: true })
  email: string;

  @OneToMany(() => Turno, turno => turno.cliente)
  turnos: Turno[];
}
