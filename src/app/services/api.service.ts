import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPizza} from '../interfaces/IPizza';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  public getPizzaList(): Observable<IPizza[]> {
    return this.http.get<IPizza[]>(`assets/list.json`);
  }
}
