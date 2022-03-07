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

  get(login: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(UtilisateurService.URL + '/' + login);
  }

  info(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(UtilisateurService.URL + '/info');
  }
}
