import { Component, OnInit } from '@angular/core';
import { Commande } from "../../../../model/commande";
import { Observable } from "rxjs";
import { CommandeService } from "../../../../service/commande.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-commande',
  templateUrl: './list-achat.component.html',
  styleUrls: ['./list-achat.component.css']
})
export class ListAchatComponent implements OnInit {
  commandes!: Observable<Commande[]>;
  isLoading: boolean = true;

  constructor(private commandeService: CommandeService, private router: Router) { }

  ngOnInit(): void {
    this.commandes = this.commandeService.getAllAchat();
    this.commandes.subscribe((result) => {
      if(result.length > 0) {
        let firstCommandeId = result[0].id;
        this.router.navigate(['commandes/achat', firstCommandeId]);
      }

      this.isLoading = false;
    });
  }

}
