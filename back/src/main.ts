import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsOptions } from './security/cors/cors.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(8080);
}
bootstrap();
