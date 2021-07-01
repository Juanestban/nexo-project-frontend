import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from 'src/app/config/urlApi';
import { MerchandiseUser } from 'src/app/models/MerchandiseUser';

@Injectable({
  providedIn: 'root',
})
export class MerchandiseUserService {
  endpoint: string = `${URL}/userMerchandise`;

  constructor(private http: HttpClient) {}

  public getByIdMerchandise(
    idMerchandise: number | string
  ): Observable<MerchandiseUser[]> {
    return this.http.get<MerchandiseUser[]>(
      `${this.endpoint}/${idMerchandise}`
    );
  }
}
