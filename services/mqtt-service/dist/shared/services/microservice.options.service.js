"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisMicroserviceOption = {
    name: 'REDIS_SERVICE',
    transport: 1,
    options: {
        url: 'redis://127.0.0.1:6379',
    },
};
exports.MQTTMicroserviceOption = {
    name: 'MQTT_SERVICE',
    transport: 3,
    options: {
        url: 'mqtt://127.0.0.1:1883',
    },
};
exports.RMQMicroserviceOption = {
    name: 'RMQ_SERVICE',
    transport: 5,
    options: {
        urls: ['amqp://127.0.0.1:5672'],
        queue: 'cats_queue',
        queueOptions: {
            durable: false
        },
    },
};
exports.KAFKAMicroserviceOption = {
    name: 'KAFKA_SERVICE',
    transport: 6,
    options: {
        client: {
            brokers: ['127.0.0.1:9092'],
        }
    },
};
exports.GRPCMicroserviceOption = {
    name: 'GRPC_SERVICE',
    transport: 4,
    options: {
        package: 'hero',
    },
};
//# sourceMappingURL=microservice.options.service.js.map