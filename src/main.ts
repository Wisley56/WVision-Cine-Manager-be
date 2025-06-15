import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove propriedades que não estão no DTO
    forbidNonWhitelisted: true, // Lança erro se propriedades extras forem enviadas
    transform: true, // Transforma os tipos primitivos
  }));

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:3000', // URL do seu frontend Next.js
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3001); // Porta do backend
}
bootstrap();