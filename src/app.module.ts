import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TurnosModule } from './turnos/turnos.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [TurnosModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
