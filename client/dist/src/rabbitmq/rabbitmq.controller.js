"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const shared_1 = require("../../shared");
const rxjs_1 = require("rxjs");
let RabbitmqController = class RabbitmqController {
    constructor() {
        this.client = microservices_1.ClientProxyFactory.create(shared_1.RMQMicroserviceOption);
    }
    createUser() {
        const payload = shared_1.nasterblueProduct;
        return this.client.send({
            cmd: shared_1.EventPatternEnum.CREATE_PRODUCT
        }, payload);
    }
    createUser2() {
        const payload = shared_1.nasterblueProduct;
        this.client.emit(shared_1.EventPatternEnum.CREATE_PRODUCT, payload);
        return new rxjs_1.Observable(subscriber => subscriber.next(payload));
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], RabbitmqController.prototype, "createUser", null);
__decorate([
    common_1.Get('/rabbitmq'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], RabbitmqController.prototype, "createUser2", null);
RabbitmqController = __decorate([
    common_1.Controller('rabbitmq'),
    __metadata("design:paramtypes", [])
], RabbitmqController);
exports.RabbitmqController = RabbitmqController;
//# sourceMappingURL=rabbitmq.controller.js.map