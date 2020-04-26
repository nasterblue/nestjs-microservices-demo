import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import { RedisModule } from './redis/redis.module';
import { MqttModule } from './mqtt/mqtt.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';
import { KafkaModule } from './kafka/kafka.module';
@Module({
  imports: [
    RedisModule,
    MqttModule,
    RabbitmqModule,
    KafkaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
