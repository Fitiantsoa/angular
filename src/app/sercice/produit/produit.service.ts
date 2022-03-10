import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/model/produit';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private static URL = 'http://localhost:8080/api/produit';
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(ProduitService.URL);
  }
  public get(id: number): Observable<Produit> {
    return this.httpClient.get<Produit>(ProduitService.URL + '/' + id);
  }

  public getByUtilisateur(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(ProduitService.URL + '/user');
  }

  public create(produit: Produit): Observable<Produit> {
    return this.httpClient.post<Produit>(
      ProduitService.URL,
      this.produitToJson(produit)
    );
  }


  public update(produit: Produit): Observable<Produit> {
    console.log(this.produitToJson(produit));
    return this.httpClient.put<Produit>(
      ProduitService.URL,
      this.produitToJson(produit)
    );
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${ProduitService.URL}/${id}`);
  }

  /*public achat(id: number, quantite:number): Observable<ArrayBuffer> {
    return this.httpClient.put<Produit>(ProduitService.URL + '/' + id + '/' +quantite)
  }*/

  private produitToJson(produit: Produit): any {
    const obj = {
      id: produit.id,
      nom: produit.nom,
      prix: produit.prix,
      stock: produit.stock,
      plante: produit.plante,
      utilisateur: produit.utilisateur,
    };
    return obj;
  }
}
