import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/userSkill';
@Injectable({
  providedIn: 'root'
})
export class UserskillServicesService {

  constructor(private http: HttpClient) { }

  findUsersByEmail(email: any): Observable<any> {
    return this.http.get(`${baseUrl}/getUsers?email=${email}`);
  }

  findUsersBySkill(id: any, view: any): Observable<any> {
    return this.http.get(`${baseUrl}/getUsersBySkill?${view}Id=${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
