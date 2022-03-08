import { Component, OnInit } from '@angular/core';
import { Commande } from "../../../model/commande";
import { Observable } from "rxjs";
import { CommandeService } from "../../../service/commande.service";

@Component({
  selector: 'app-commande',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  commandes!: Observable<Commande[]>;

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandes = this.commandeService.getAll();
  }

}
