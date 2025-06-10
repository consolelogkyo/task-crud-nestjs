import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

// - 'src/app/app.module.ts': É o modulo principal da aplicação NestJS, onde são importados outros módulos, controladores e provedores.
// - 'src/app/app.controller.ts': Define o controlador principal da aplicação, que lida com as rotas e requisições HTTP.
// - 'src/app/app.service.ts': Define o serviço principal da aplicação, que contém a lógica de negócio.

// Arquivo que inicia a aplicação NestJS
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
