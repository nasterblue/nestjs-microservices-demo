import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions} from '@nestjs/microservices';
import {AppModule} from './app.module';
import {MQTTMicroserviceOption} from '@nasterblue/shared';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, MQTTMicroserviceOption as any);
  await app.listenAsync().then(() => console.log(`${MQTTMicroserviceOption.name} microservice is listening !`));
}
bootstrap();
