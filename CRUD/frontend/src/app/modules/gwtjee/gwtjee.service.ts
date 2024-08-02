package app.modules.gwtjee;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GwtJeeService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get('api/data');
  }

  updateData(data: any): Observable<any> {
    return this.http.put('api/data', data);
  }

}
