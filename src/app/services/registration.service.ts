import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpService: HttpService) { }

  public getPattern(): Observable<any>{
    return this.httpService.getPatterns();
  }
}
