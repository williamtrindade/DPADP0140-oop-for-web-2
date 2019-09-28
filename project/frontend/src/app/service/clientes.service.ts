import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from '../model/ClienteModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly URL_API = ' http://localhost:8080/clients/json ';

  constructor(private http: HttpClient) {

  }

  getClientes(): Observable<ClienteModel[]> {
    return this.http.get<ClienteModel[]>(this.URL_API);
  }
}
