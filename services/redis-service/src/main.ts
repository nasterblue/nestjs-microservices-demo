import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions} from '@nestjs/microservices';
import {AppModule} from './app.module';
import {RedisMicroserviceOption} from '@nasterblue/shared';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, RedisMicroserviceOption as any);
  await app.listenAsync().then(() => console.log(`${RedisMicroserviceOption.name} microservice is listening !`));
}

bootstrap();
