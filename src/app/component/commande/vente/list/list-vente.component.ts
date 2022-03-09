import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Commande } from "../../../../model/commande";
import { CommandeService } from "../../../../service/commande.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-vente',
  templateUrl: './list-vente.component.html',
  styleUrls: ['./list-vente.component.css']
})
export class ListVenteComponent implements OnInit {
  commandes!: Observable<Commande[]>;
  isLoading: boolean = true;

  constructor(private commandeService: CommandeService, private router: Router) { }

  ngOnInit(): void {
    this.commandes = this.commandeService.getAllVente();
    this.commandes.subscribe((result) => {
      if(result.length > 0) {
        let firstCommandeId = result[0].id;
        this.router.navigate(['commandes/venete', firstCommandeId]);
      }

      this.isLoading = false;
    });
  }

}
