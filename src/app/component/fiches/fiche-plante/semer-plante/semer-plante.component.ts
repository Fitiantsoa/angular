import { Observable } from 'rxjs';
import { FichePlanteService } from './../../../../service/fiches/fiche-plante.service';
import { Component, OnInit } from '@angular/core';
import { FichePlante } from 'src/app/model/fiches/fiche-plante';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-semer-plante',
  templateUrl: './semer-plante.component.html',
  styleUrls: ['./semer-plante.component.css']
})
export class SemerPlanteComponent implements OnInit {

  fichePlante: FichePlante = new FichePlante();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fichePlanteService: FichePlanteService,
    private router: Router
  ){}
    ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.fichePlanteService.get(params['id']).subscribe((result) => {
          console.log(result);
          this.fichePlante = result;
        });
      }
    });
  }

}
