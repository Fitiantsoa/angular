import { Component, OnInit } from '@angular/core';
import { Commande } from "../../../model/commande";
import { Observable } from "rxjs";
import { CommandeService } from "../../../service/commande.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {
  commandes!: Observable<Commande[]>;

  constructor(private commandeService: CommandeService, private router: Router) { }

  ngOnInit(): void {
    this.commandes = this.commandeService.getAll();
    this.commandes.subscribe((result) => {
      if(result.length > 0) {
        let firstCommandeId = result[0].id;
        this.router.navigate(['commandes', firstCommandeId]);
      }
    });
  }

}
