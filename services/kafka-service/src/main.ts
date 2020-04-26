import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions} from '@nestjs/microservices';
import {AppModule} from './app.module';
import {KAFKAMicroserviceOption} from '@nasterblue/shared';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, KAFKAMicroserviceOption as any);
  await app.listenAsync().then(() => console.log(`${KAFKAMicroserviceOption.name} microservice is listening !`));
}
bootstrap();
