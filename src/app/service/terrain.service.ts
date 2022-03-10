import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plante } from '../model/plante';
import { Terrain } from '../model/terrain';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})


export class TerrainService {
  
  static URL: string = 'http://localhost:8080/api/terrain';
  constructor(private http: HttpClient) {}
  
//getAll(): Observable<Terrain[]> {
//  return this.http.get<Terrain[]>(TerrainService.URL);
//}

get(): Observable<Terrain[]> {
  return this.http.get<Terrain[]>(TerrainService.URL);
}

delete(id: number): Observable<void> {
  return this.http.delete<void>(`${TerrainService.URL}/${id}`);
}

update(terrain: Terrain): Observable<Terrain> {
  return this.http.put<Terrain>(
    `${TerrainService.URL}/${terrain.id}`,
    this.terrainToJson(terrain)
  );
}

getTerrainWithPlantes(id: number) {
    return this.http.get<Plante[]>(`${TerrainService.URL}/${id}/plantes`);
  }

create(terrain: Terrain): Observable<Terrain> {
 /* const terrainEnJson =  
  { id: terrain.id,
    surface: terrain.surface,
    localisation: terrain.localisation,
    dureeExpoSoleil: terrain.dureeExpoSoleil,
    decoupageTerrainLargeur: terrain.decoupageTerrainLargeur,
    decoupageTerrainLongueur: terrain.decoupageTerrainLongueur,
    typeDeSol: terrain.typeDeSol,
};*/
  console.log(terrain);
  console.log(this.terrainToJson(terrain)+"le terrain dans service");
  return this.http.post<Terrain>(
    
    TerrainService.URL, terrain
  );
}

private terrainToJson(terrain: Terrain): any {
        const obj = {
          id: terrain.id,
          surface: terrain.surface,
          localisation: terrain.localisation,
          dureeExpoSoleil: terrain.dureeExpoSoleil,
          decoupageTerrainLargeur: terrain.decoupageTerrainLargeur,
          decoupageTerrainLongueur: terrain.decoupageTerrainLongueur,
          typeDeSol: terrain.typeDeSol,

        };
        if (terrain.utilisateur) {
          Object.assign(obj, 
              {utilisateur: 
                  {id: terrain.utilisateur.civilite
                  }
              }
            )}

        if (terrain.plante) {
          Object.assign(obj, 
                              {plante: {
                                id: terrain.id,
                                        }
                              }
                        )
        
              return obj;  }
      }

}
