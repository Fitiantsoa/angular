import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Commande } from "../model/commande";
import { environment } from "../../environments/environment";
import { Terrain } from "../model/terrain";

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

  create(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>(
      environment.commandeAPIEndPoint, this.commandeToJson(commande)
    );
  }

  private commandeToJson(commande: Commande) {
    const rootObj = {};
    const produitsObj = {};

    commande.commandeProduits?.forEach(item => {
      Object.assign(produitsObj, {
        id: {
          produit: {
            id: item.id?.produit?.id
          }
        },
        quantite: item.quantite
      })
    })

    Object.assign(rootObj, {
      commandeProduits: [produitsObj]
    });

    return rootObj;
  }
}
