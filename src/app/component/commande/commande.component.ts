import { Component, OnInit } from '@angular/core';
import { Commande } from "../../model/commande";
import { Observable } from "rxjs";
import { CommandeService } from "../../service/commande.service";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commandes!: Observable<Commande[]>;

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandes = this.commandeService.getAll();
  }

}
