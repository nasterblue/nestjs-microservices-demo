"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const shared_1 = require("../../shared");
const redis_controller_1 = require("./redis.controller");
const options = [
    shared_1.RedisMicroserviceOption
];
let RedisModule = class RedisModule {
};
RedisModule = __decorate([
    common_1.Module({
        imports: [
            microservices_1.ClientsModule.register(options),
        ],
        controllers: [redis_controller_1.RedisController]
    })
], RedisModule);
exports.RedisModule = RedisModule;
//# sourceMappingURL=redis.module.js.map