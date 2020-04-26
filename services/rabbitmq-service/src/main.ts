import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions} from '@nestjs/microservices';
import {AppModule} from './app.module';
import {RMQMicroserviceOption} from '@nasterblue/shared';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, RMQMicroserviceOption as any);
  await app.listenAsync().then(() => console.log(`${RMQMicroserviceOption.name} microservice is listening !`));
}
bootstrap();
