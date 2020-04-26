import {Controller, Get} from '@nestjs/common';
import {ClientProxy, ClientProxyFactory} from '@nestjs/microservices';
import {EventPatternEnum, RMQMicroserviceOption, nasterblueProduct} from '../../shared';
import {Observable} from 'rxjs';
@Controller('rabbitmq')
export class RabbitmqController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(RMQMicroserviceOption as any);
  }

  @Get()
  createUser(): Observable<any> {
    const payload = nasterblueProduct;
    return this.client.send({
      cmd: EventPatternEnum.CREATE_PRODUCT
    }, payload);
  }


  @Get('/rabbitmq')
  createUser2(): Observable<any> {
    const payload = nasterblueProduct;
    this.client.emit(EventPatternEnum.CREATE_PRODUCT, payload);
    return new Observable(subscriber => subscriber.next(payload));
  }
}
