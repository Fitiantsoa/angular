import { Component, OnInit } from '@angular/core';
import { Commande } from "../../../model/commande";
import { Observable } from "rxjs";
import { CommandeService } from "../../../service/commande.service";
import { CommandeStatut } from "../../../model/commande-statut";

@Component({
  selector: 'app-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {
  commandes!: Observable<Commande[]>;
  commandeStatut = CommandeStatut;

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandes = this.commandeService.getAll();
  }

}
