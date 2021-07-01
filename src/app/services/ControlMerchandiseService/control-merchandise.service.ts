import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from 'src/app/config/urlApi';
import { ControlMerchandise } from 'src/app/models/ControlMerchandise';

@Injectable({
  providedIn: 'root',
})
export class ControlMerchandiseService {
  endpoint: string = `${URL}/controlMerchandise`;

  constructor(private http: HttpClient) {}

  public getAllControlMerchandise(): Observable<ControlMerchandise[]> {
    return this.http.get<ControlMerchandise[]>(this.endpoint);
  }
}
