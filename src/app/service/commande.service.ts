import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Commande } from "../model/commande";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Commande> {
    return this.http.get<Commande>(`${environment.commandeAPIEndPoint}/${id}`);
  }
}
