import {Controller} from '@nestjs/common';
import {EventPattern, MessagePattern} from '@nestjs/microservices';
import {EventPatternEnum, RedisMicroserviceOption} from '@nasterblue/shared';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @MessagePattern({
    cmd: EventPatternEnum.CREATE_USER
  })
  performAction(data: any): Observable<any> {
    console.log([
      'microservice',
      `${RedisMicroserviceOption.name}`,
      `PERFORM`,
      `${EventPatternEnum.CREATE_USER}`,
      `WITH DATA`,
      data,
      `RETURNED DATA `,
      data
    ]);
    return of(data).pipe(delay(5000));
  }

  @EventPattern(EventPatternEnum.CREATE_USER)
  performActionNoReturned(data: any): void {
    console.log([
      'microservice',
      `${RedisMicroserviceOption.name}`,
      `PERFORM`,
      `${EventPatternEnum.CREATE_USER}`,
      `WITH DATA`,
      data,
      ` DO NOT RETURNED DATA `
    ]);
  }
}
