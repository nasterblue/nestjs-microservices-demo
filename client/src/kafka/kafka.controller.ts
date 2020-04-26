import {Controller, Get} from '@nestjs/common';
import {ClientProxy, ClientProxyFactory} from '@nestjs/microservices';
import {EventPatternEnum, nasterblueUser, KAFKAMicroserviceOption} from '../../shared';
import {Observable} from 'rxjs';

@Controller('kafka')
export class KafkaController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(KAFKAMicroserviceOption as any);
  }

  @Get()
  createUser(): Observable<any> {
    const payload = nasterblueUser;
    return this.client.send({
      cmd: EventPatternEnum.CREATE_PAYMENT
    }, payload);
  }


  @Get('/kafka')
  createUser2(): Observable<any> {
    const payload = nasterblueUser;
    this.client.emit(EventPatternEnum.CREATE_PAYMENT, payload);
    return new Observable(subscriber => subscriber.next(payload));
  }

}
