import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from 'src/app/config/urlApi';
import { Merchandise } from 'src/app/models/Merchandise';

@Injectable({
  providedIn: 'root',
})
export class MerchandiseService {
  endpoint: string = `${URL}/merchandises`;

  constructor(private http: HttpClient) {}

  // get all
  public getAllMerchandises(): Observable<Merchandise[]> {
    return this.http.get<Merchandise[]>(this.endpoint);
  }

  // get by id
  public getMerchandiseById(
    idMerchandise: number | string
  ): Observable<Merchandise> {
    return this.http.get<Merchandise>(`${this.endpoint}/${idMerchandise}`);
  }

  // post
  public postMerchandise(merchandise: Merchandise): Observable<Merchandise[]> {
    return this.http.post<Merchandise[]>(`${this.endpoint}`, merchandise);
  }

  // put
  public putMerchandise(
    merchandise: Merchandise,
    userId: number | string
  ): Observable<Merchandise> {
    return this.http.put<Merchandise>(
      `${this.endpoint}/${merchandise.id}/${userId}`,
      merchandise
    );
  }

  // delete
  public deleteMerchandise(
    idMerchandise: number | string
  ): Observable<Merchandise> {
    return this.http.delete<Merchandise>(`${this.endpoint}/${idMerchandise}`);
  }
}
