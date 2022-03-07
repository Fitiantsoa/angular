import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  static URL: string = 'http://localhost:8080/api/commande';

  constructor(private http: HttpClient) { }
}
