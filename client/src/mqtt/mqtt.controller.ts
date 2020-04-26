import {Controller, Get} from '@nestjs/common';
import {ClientProxy, ClientProxyFactory} from '@nestjs/microservices';
import {EventPatternEnum, MQTTMicroserviceOption, nasterblueOrder} from '../../shared';
import {Observable} from 'rxjs';

@Controller('mqtt')
export class MqttController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(MQTTMicroserviceOption as any);
  }

  @Get()
  createUser(): Observable<any> {
    const payload = nasterblueOrder;
    return this.client.send({
      cmd: EventPatternEnum.CREATE_ORDER
    }, payload);
  }


  @Get('/mqtt')
  createUser2(): Observable<any> {
    const payload = nasterblueOrder;
    this.client.emit(EventPatternEnum.CREATE_ORDER, payload);
    return new Observable(subscriber => subscriber.next(payload));
  }
}
