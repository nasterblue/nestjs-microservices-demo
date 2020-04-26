import { Transport } from '@nestjs/microservices';
export declare const RedisMicroserviceOption: {
    name: string;
    transport: Transport;
    options: {
        url: string;
    };
};
export declare const MQTTMicroserviceOption: {
    name: string;
    transport: Transport;
    options: {
        url: string;
    };
};
export declare const RMQMicroserviceOption: {
    name: string;
    transport: Transport;
    options: {
        urls: string[];
        queue: string;
        queueOptions: {
            durable: boolean;
        };
    };
};
export declare const KAFKAMicroserviceOption: {
    name: string;
    transport: Transport;
    options: {
        client: {
            brokers: string[];
        };
    };
};
export declare const GRPCMicroserviceOption: {
    name: string;
    transport: Transport;
    options: {
        package: string;
    };
};
