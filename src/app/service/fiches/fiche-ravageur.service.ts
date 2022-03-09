import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FicheRavageur } from '../../model/fiches/fiche-ravageur';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class FicheRavageurService {
  private static URL = 'http://localhost:8080/api/fiches_ravageur';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<FicheRavageur[]> {
    return this.httpClient.get<FicheRavageur[]>(FicheRavageurService.URL);
  }

  public get(id: number): Observable<FicheRavageur> {
    return this.httpClient.get<FicheRavageur>(`${FicheRavageurService.URL}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${FicheRavageurService.URL}/${id}`);
  }

  public create(ficheRavageur: FicheRavageur): Observable<FicheRavageur> {
    console.log(ficheRavageur);
    return this.httpClient.post<FicheRavageur>(
      FicheRavageurService.URL,
      this.ficheRavageurToJson(ficheRavageur)
    );
  }

  public update(ficheRavageur: FicheRavageur): Observable<FicheRavageur> {
    console.log(this.ficheRavageurToJson(ficheRavageur));
    return this.httpClient.put<FicheRavageur>(
      `${FicheRavageurService.URL}/${ficheRavageur.id}`,
      this.ficheRavageurToJson(ficheRavageur)
    );
  }

  private ficheRavageurToJson(ficheRavageur: FicheRavageur): any {
    const obj = {
      id: ficheRavageur.id,
      nom: ficheRavageur.nom,
      description: ficheRavageur.description,
      solution: ficheRavageur.solution,
    };
    return obj;

}

}
