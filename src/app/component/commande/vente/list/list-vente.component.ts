import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Commande } from "../../../../model/commande";

@Component({
  selector: 'app-list-vente',
  templateUrl: './list-vente.component.html',
  styleUrls: ['./list-vente.component.css']
})
export class ListVenteComponent implements OnInit {
  commandes!: Observable<Commande[]>;
  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
