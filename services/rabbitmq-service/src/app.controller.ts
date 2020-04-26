import {Controller} from '@nestjs/common';
import {AppService} from './app.service';
import {EventPattern, MessagePattern} from '@nestjs/microservices';
import {EventPatternEnum, RMQMicroserviceOption} from '@nasterblue/shared';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @MessagePattern({
    cmd: EventPatternEnum.CREATE_PRODUCT
  })
  performAction(data: any): Observable<any> {
    console.log([
      'microservice',
      `${RMQMicroserviceOption.name}`,
      `PERFORM`,
      `${EventPatternEnum.CREATE_PRODUCT}`,
      `WITH DATA`,
      data,
      `RETURNED DATA `,
      data
    ]);
    return of(data).pipe(delay(5000));
  }

  @EventPattern(EventPatternEnum.CREATE_PRODUCT)
  performActionNoReturned(data: any): void {
    console.log([
      'microservice',
      `${RMQMicroserviceOption.name}`,
      `PERFORM`,
      `${EventPatternEnum.CREATE_PRODUCT}`,
      `WITH DATA`,
      data,
      ` DO NOT RETURNED DATA `
    ]);
  }
}
