import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from 'src/app/config/urlApi';
import { Charge } from 'src/app/models/Charge';

@Injectable({
  providedIn: 'root',
})
export class ChargeService {
  public endpoint: string = `${URL}/charges`;

  constructor(private http: HttpClient) {}

  public getAllCharges(): Observable<Charge[]> {
    return this.http.get<Charge[]>(this.endpoint);
  }

  public postAllCharges(charge: Charge): Observable<Charge> {
    return this.http.post<Charge>(this.endpoint, charge);
  }
}
