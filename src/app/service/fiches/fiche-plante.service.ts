import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FichePlante } from '../../model/fiches/fiche-plante';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FichePlanteService {
  private static URL = 'http://localhost:8080/api/fiches_plante';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<FichePlante[]> {
    return this.httpClient.get<FichePlante[]>(FichePlanteService.URL);
  }

  public get(id: number): Observable<FichePlante> {
    return this.httpClient.get<FichePlante>(`${FichePlanteService.URL}/${id}`);
  }

  public getByNom(nom: string): Observable<FichePlante> {
    return this.httpClient.get<FichePlante>(`${FichePlanteService.URL}/${nom}`);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${FichePlanteService.URL}/${id}`);
  }

  public create(fichePlante: FichePlante): Observable<FichePlante> {
    return this.httpClient.post<FichePlante>(
      FichePlanteService.URL,
      this.fichePlanteToJson(fichePlante)
    );
  }

  public update(fichePlante: FichePlante): Observable<FichePlante> {
    console.log(this.fichePlanteToJson(fichePlante));
    return this.httpClient.put<FichePlante>(
      `${FichePlanteService.URL}/${fichePlante.id}`,
      this.fichePlanteToJson(fichePlante)
    );
  }

  private fichePlanteToJson(fichePlante: FichePlante): any {
    const obj = {
      id: fichePlante.id,
      nom: fichePlante.nom,
      eau: fichePlante.eau,
      exposition: fichePlante.exposition,
      espacement: fichePlante.espacement,
      dureeConservationGraine: fichePlante.dureeConservationGraine,
      calendrierSemer: fichePlante.calendrierSemer,
      calendrierPlanter: fichePlante.calendrierPlanter,
      calendrierRecolter: fichePlante.calendrierRecolter,
      bonsCopains: fichePlante.bonsCopains,
      mauvaisCopains: fichePlante.mauvaisCopains,
      maladies: fichePlante.maladies,
      ravageurs: fichePlante.ravageurs,
      methodeSemer: fichePlante.methodeSemer,
      methodePlanter: fichePlante.methodePlanter,
      methodeEntretien: fichePlante.methodeEntretien,
      methodeRecolte: fichePlante.methodeRecolte,
    };
    return obj;
  }
}
