import { Component, OnInit } from '@angular/core';
import { CommandeService } from "../../../../service/commande.service";
import { Observable } from "rxjs";
import { Commande } from "../../../../model/commande";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details-achat.component.html',
  styleUrls: ['./details-achat.component.css']
})
export class DetailsAchatComponent implements OnInit {
  commande!: Observable<Commande>;
  isLoading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.isLoading = true;
        this.commande = this.commandeService.getById(params['id']);
        this.commande.subscribe(() => {
          this.isLoading = false;
        })
      }
    });
  }

}
