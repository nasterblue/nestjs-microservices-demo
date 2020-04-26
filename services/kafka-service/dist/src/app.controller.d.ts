import { Observable } from 'rxjs';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    performAction(data: any): Observable<any>;
    performActionNoReturned(data: any): void;
}
