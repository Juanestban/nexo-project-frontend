import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from 'src/app/config/urlApi';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  endpoint: string = `${URL}/users`;

  constructor(private http: HttpClient) {}

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.endpoint);
  }

  public postUser(user: User): Observable<User> {
    return this.http.post<User>(this.endpoint, user);
  }
}
