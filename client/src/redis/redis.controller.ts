import {Controller, Get} from '@nestjs/common';
import {ClientProxy, ClientProxyFactory} from '@nestjs/microservices';
import {EventPatternEnum, nasterblueUser, RedisMicroserviceOption} from '../../shared';
import {Observable} from 'rxjs';

@Controller('redis')
export class RedisController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(RedisMicroserviceOption as any);
  }

  @Get()
  createUser(): Observable<any> {
    const payload = nasterblueUser;
    return this.client.send({
      cmd: EventPatternEnum.CREATE_USER
    }, payload);
  }


  @Get('/redis')
  createUser2(): Observable<any> {
    const payload = nasterblueUser;
    this.client.emit(EventPatternEnum.CREATE_USER, payload);
    return new Observable(subscriber => subscriber.next(payload));
  }

}
