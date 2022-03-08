import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plante } from '../model/plante';

@Injectable({
  providedIn: 'root'
})
export class PlanteService {
  static URL: string = 'http://localhost:8080/api/plante';
  constructor(private http: HttpClient) {}

  
  getAll(): Observable<Plante[]> {
    return this.http.get<Plante[]>(PlanteService.URL);
  }
  
  get(id: number): Observable<Plante> {
    return this.http.get<Plante>(`${PlanteService.URL}/${id}`);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${PlanteService.URL}/${id}`);
  }

  update(plante: Plante): Observable<Plante> {
    return this.http.put<Plante>(
      `${PlanteService.URL}/${plante.id}`,
      this.planteToJson(plante)
    );
  }

  create(plante: Plante): Observable<Plante> {
    const planteEnJson = { 
      id: plante.id,
      typePlante:plante.typePlante,
      croissance:plante.croissance,
      datePlantation:plante.datePlantation,
      arrosageOk:plante.arrosageOk,
      dateRecolte:plante.dateRecolte
    };
    return this.http.post<Plante>(
      PlanteService.URL, this.planteToJson
    );
  }

  private planteToJson(plante: Plante): any {
    const obj = {
      id: plante.id,
      typePlante:plante.typePlante,
      croissance:plante.croissance,
      datePlantation:plante.datePlantation,
      arrosageOk:plante.arrosageOk,
      dateRecolte:plante.dateRecolte
    };
    if (plante.terrain) {
      Object.assign(obj, 
          {terrain: 
              {id: plante.terrain.id, 
                surface: plante.terrain.surface,
                decoupageTerrainLargeur: plante.terrain.decoupageTerrainLargeur,
                decoupageTerrainLongueur: plante.terrain.decoupageTerrainLongueur 
              }
          }
        )
      return obj}

     if (plante.emplacement) {
       Object.assign(obj, 
                          {emplacement: {
                            positionx: plante.emplacement.positionx,
                            positiony: plante.emplacement.positiony
                                    }
                          }
                    )
      }
          return obj;
}
}

