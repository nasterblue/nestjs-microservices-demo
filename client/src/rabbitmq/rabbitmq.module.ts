import { Module } from '@nestjs/common';
import { RabbitmqController } from './rabbitmq.controller';

@Module({
  controllers: [RabbitmqController]
})
export class RabbitmqModule {}
