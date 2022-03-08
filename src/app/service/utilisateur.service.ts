import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  static URL: string = 'http://localhost:8080/api/utilisateur';

  constructor(private http: HttpClient) {}

  info(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(UtilisateurService.URL + '/info');
  }

  public create(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(
      UtilisateurService.URL,
      this.utilisateurToJson(utilisateur)
    );
  }

  public update(utilisateur: Utilisateur): Observable<Utilisateur> {
    console.log(this.utilisateurToJson(utilisateur));
    return this.http.put<Utilisateur>(
      UtilisateurService.URL,
      this.utilisateurToJson(utilisateur)
    );
  }

  private utilisateurToJson(utilisateur: Utilisateur): any {
    const obj = {
      id: utilisateur.id,
      civilite: utilisateur.civilite,
    };

    if (utilisateur.adresse) {
      Object.assign(obj, {
        adresse: {
          numero: utilisateur.adresse.numero,
          voie: utilisateur.adresse.voie,
          cp: utilisateur.adresse.cp,
          ville: utilisateur.adresse.ville,
        },
      });
    }
    return obj;
  }
}
