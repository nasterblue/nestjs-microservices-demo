import {Module} from '@nestjs/common';
import {ClientsModule} from '@nestjs/microservices';
import {RedisMicroserviceOption} from '../../shared';
import {RedisController} from './redis.controller';

const options: any = [
  RedisMicroserviceOption
];

@Module({
  imports: [
    ClientsModule.register(options),
  ],
  controllers: [RedisController]
})
export class RedisModule {

}
