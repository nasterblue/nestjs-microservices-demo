export declare const RedisMicroserviceOption: {
    name: string;
    transport: number;
    options: {
        url: string;
    };
};
export declare const MQTTMicroserviceOption: {
    name: string;
    transport: number;
    options: {
        url: string;
    };
};
export declare const RMQMicroserviceOption: {
    name: string;
    transport: number;
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
    transport: number;
    options: {
        client: {
            brokers: string[];
        };
    };
};
export declare const GRPCMicroserviceOption: {
    name: string;
    transport: number;
    options: {
        package: string;
    };
};
