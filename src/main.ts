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

  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
  // Habilitar CORS
  app.enableCors({
    origin: frontendUrl,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3001); // Porta do backend
}
bootstrap();