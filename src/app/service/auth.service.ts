import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../model/compte';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public authentication(login: string, password: string): Observable<void> {
    let headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(login + ':' + password),
    });
    return this.http.get<void>('http://localhost:8080/api/auth', {
      headers: headers,
    });
  }

  public isAuthenticated(): string | null {
    return localStorage.getItem('token');
  }

  public inscription(user: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth', user);
  }
}
