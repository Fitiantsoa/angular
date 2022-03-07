import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FicheMaladie } from './../../model/fiches/fiche-maladie';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class FicheMaladieService {
  private static URL = 'http://localhost:8080/api/fiches_maladie';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<FicheMaladie[]> {
    return this.httpClient.get<FicheMaladie[]>(FicheMaladieService.URL);
  }

  public get(id: number): Observable<FicheMaladie> {
    return this.httpClient.get<FicheMaladie>(`${FicheMaladieService.URL}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${FicheMaladieService.URL}/${id}`);
  }

  public create(ficheMaladie: FicheMaladie): Observable<FicheMaladie> {
    return this.httpClient.post<FicheMaladie>(
      FicheMaladieService.URL,
      this.ficheMaladieToJson(ficheMaladie)
    );
  }

  public update(ficheMaladie: FicheMaladie): Observable<FicheMaladie> {
    console.log(this.ficheMaladieToJson(ficheMaladie));
    return this.httpClient.put<FicheMaladie>(
      `${FicheMaladieService.URL}/${ficheMaladie.id}`,
      this.ficheMaladieToJson(ficheMaladie)
    );
  }

  private ficheMaladieToJson(ficheMaladie: FicheMaladie): any {
    const obj = {
      id: ficheMaladie.id,
      nom: ficheMaladie.nom,
      description: ficheMaladie.description,
      solution: ficheMaladie.solution,
    };

}

}
