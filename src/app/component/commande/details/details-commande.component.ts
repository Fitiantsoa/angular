import { Component, OnInit } from '@angular/core';
import { CommandeService } from "../../../service/commande.service";
import { Observable } from "rxjs";
import { Commande } from "../../../model/commande";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.css']
})
export class DetailsCommandeComponent implements OnInit {
  commande!: Observable<Commande>;

  constructor(private activatedRoute: ActivatedRoute, private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.commande = this.commandeService.getById(params['id']);
      }
    });
  }

}
