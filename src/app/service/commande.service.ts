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

  getAllAchat(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${environment.commandeAPIEndPoint}/achat`);
  }

  getAllVente(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${environment.commandeAPIEndPoint}/vente`);
  }

  getById(id: number): Observable<Commande> {
    return this.http.get<Commande>(`${environment.commandeAPIEndPoint}/id/${id}`);
  }
}
