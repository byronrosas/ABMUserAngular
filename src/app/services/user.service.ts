import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRequest, User, UserPage } from '../models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_URL_OPERACION = environment.urlbackend;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) {
  }

  public get(page): Observable<UserPage[]> {
    return this.http.get<UserPage[]>(`${API_URL_OPERACION}/users/${page}`);
  }

  public getById(id:number): Observable<User> {
    return this.http.get<User>(`${API_URL_OPERACION}/users/${id}`);
  }

  public add(user: UserRequest): Observable<User> {
    return this.http.post<User>(`${API_URL_OPERACION}/users`, user);
  }

  public delete(id:number): Observable<any> {
    return this.http.delete<any>(`${API_URL_OPERACION}/users/${id}`);
  }
}
