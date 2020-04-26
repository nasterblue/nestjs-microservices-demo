"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
exports.RedisMicroserviceOption = {
    name: 'REDIS_SERVICE',
    transport: microservices_1.Transport.REDIS,
    options: {
        url: 'redis://127.0.0.1:6379',
    },
};
exports.MQTTMicroserviceOption = {
    name: 'MQTT_SERVICE',
    transport: microservices_1.Transport.MQTT,
    options: {
        url: 'mqtt://127.0.0.1:1883',
    },
};
exports.RMQMicroserviceOption = {
    name: 'RMQ_SERVICE',
    transport: microservices_1.Transport.RMQ,
    options: {
        urls: ['amqp://127.0.0.1:5672'],
        queue: 'product_queue',
        queueOptions: {
            durable: false
        },
    },
};
exports.KAFKAMicroserviceOption = {
    name: 'KAFKA_SERVICE',
    transport: microservices_1.Transport.KAFKA,
    options: {
        client: {
            brokers: ['127.0.0.1:9092'],
        }
    },
};
exports.GRPCMicroserviceOption = {
    name: 'GRPC_SERVICE',
    transport: microservices_1.Transport.GRPC,
    options: {
        package: 'hero',
    },
};
//# sourceMappingURL=microservice.options.service.js.map