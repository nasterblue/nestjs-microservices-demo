"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const shared_1 = require("../shared");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, shared_1.MQTTMicroserviceOption);
    await app.listenAsync().then(() => console.log(`${shared_1.MQTTMicroserviceOption.name} microservice is listening !`));
}
bootstrap();
//# sourceMappingURL=main.js.map