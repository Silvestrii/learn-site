import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  public getLanguachTranslate(params: HttpParams): Observable<any> {
    return this.http.get('http://localhost:8016/language', {params});
  }

  public getPatterns(): Observable<any> {
    return this.http.get('http://localhost:8016/pattern');
  }
}
