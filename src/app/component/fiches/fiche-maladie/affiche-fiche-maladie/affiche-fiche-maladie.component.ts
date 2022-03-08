import { Observable } from 'rxjs';
import { FicheMaladieService } from './../../../../service/fiches/fiche-maladie.service';
import { Component, OnInit } from '@angular/core';
import { FicheMaladie } from 'src/app/model/fiches/fiche-maladie';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-affiche-fiche-maladie',
  templateUrl: './affiche-fiche-maladie.component.html',
  styleUrls: ['./affiche-fiche-maladie.component.css']
})
export class AfficheFicheMaladieComponent implements OnInit {

  ficheMaladie: FicheMaladie = new FicheMaladie();

  constructor(
    private activatedRoute: ActivatedRoute,
    private ficheMaladieService: FicheMaladieService,
    private router: Router
  ){}
    ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.ficheMaladieService.get(params['id']).subscribe((result) => {
          console.log(result);
          this.ficheMaladie = result;
        });
      }
    });
  }
}
