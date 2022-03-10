import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../model/compte';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public authentication(login: string, password: string): Observable<Compte> {
    let headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(login + ':' + password),
    });
    return this.http.get<Compte>('http://localhost:8080/api/auth', {
      headers: headers,
    });
  }

  public isAuthenticated(): string | null {
    return localStorage.getItem('token');
  }
 
  

  public role(): string | null {
    return localStorage.getItem('role');
  }

  public inscription(user: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth', user);
  }
}
