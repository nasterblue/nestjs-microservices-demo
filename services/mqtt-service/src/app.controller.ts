import {Controller} from '@nestjs/common';
import {AppService} from './app.service';
import {EventPattern, MessagePattern} from '@nestjs/microservices';
import {EventPatternEnum, MQTTMicroserviceOption} from '@nasterblue/shared';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({
    cmd: EventPatternEnum.CREATE_ORDER
  })
  performAction(data: any): Observable<any> {
    console.log([
      'microservice',
      `${MQTTMicroserviceOption.name}`,
      `PERFORM`,
      `${EventPatternEnum.CREATE_ORDER}`,
      `WITH DATA`,
      data,
      `RETURNED DATA `,
      data
    ]);
    return of(data).pipe(delay(5000));
  }

  @EventPattern(EventPatternEnum.CREATE_ORDER)
  performActionNoReturned(data: any): void {
    console.log([
      'microservice',
      `${MQTTMicroserviceOption.name}`,
      `PERFORM`,
      `${EventPatternEnum.CREATE_ORDER}`,
      `WITH DATA`,
      data,
      ` DO NOT RETURNED DATA `
    ]);
  }
}
