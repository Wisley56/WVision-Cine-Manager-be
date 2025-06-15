import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FilmesModule } from './filmes/filmes.module';
import { SalasModule } from './salas/salas.module';
import { SessoesModule } from './sessoes/sessoes.module';
import { IngressosModule } from './ingressos/ingressos.module';

@Module({
  imports: [PrismaModule, FilmesModule, SalasModule, SessoesModule, IngressosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
