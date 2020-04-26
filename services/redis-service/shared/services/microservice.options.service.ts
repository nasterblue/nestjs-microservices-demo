import {Transport} from '@nestjs/microservices';

export const RedisMicroserviceOption = {
  name: 'REDIS_SERVICE',
  transport: Transport.REDIS,
  options: {
    url: 'redis://redis:6379',
  },
};


export const MQTTMicroserviceOption = {
  name: 'MQTT_SERVICE',
  transport: Transport.MQTT,
  options: {
    url: 'mqtt://127.0.0.1:1883',
  },
};


export const RMQMicroserviceOption = {
  name: 'RMQ_SERVICE',
  transport: Transport.RMQ,
  options: {
    urls: [`amqp://rabbitmq:5672`],
  },
};

export const KAFKAMicroserviceOption = {
  name: 'KAFKA_SERVICE',
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    }
  },
};


export const GRPCMicroserviceOption = {
  name: 'GRPC_SERVICE',
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    // protoPath: join(__dirname, 'hero/hero.proto'),
  },
};