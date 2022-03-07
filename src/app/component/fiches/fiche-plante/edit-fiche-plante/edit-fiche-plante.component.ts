import { FichePlanteService } from './../../../../service/fiches/fiche-plante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FichePlante } from './../../../../model/fiches/fiche-plante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-fiche-plante',
  templateUrl: './edit-fiche-plante.component.html',
  styleUrls: ['./edit-fiche-plante.component.css']
})
export class EditFichePlanteComponent implements OnInit {

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

  save() {
    if (this.fichePlante.id) {
      this.fichePlanteService.update(this.fichePlante).subscribe((ok) => {
        this.router.navigate(['/fiches_plante']);
      });
    } else {
      this.fichePlanteService.create(this.fichePlante).subscribe((ok) => {
        this.router.navigate(['/fiches_plante']);
      });
    }
  }

}
