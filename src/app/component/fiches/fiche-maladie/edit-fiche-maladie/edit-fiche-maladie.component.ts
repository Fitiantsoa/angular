import { FicheMaladieService } from './../../../../service/fiches/fiche-maladie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FicheMaladie } from './../../../../model/fiches/fiche-maladie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-fiche-maladie',
  templateUrl: './edit-fiche-maladie.component.html',
  styleUrls: ['./edit-fiche-maladie.component.css']
})
export class EditFicheMaladieComponent implements OnInit {

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

  save() {
    if (this.ficheMaladie.id) {
      this.ficheMaladieService.update(this.ficheMaladie).subscribe((ok) => {
        this.router.navigate(['/fiches_maladie']);
      });
    } else {
      this.ficheMaladieService.create(this.ficheMaladie).subscribe((ok) => {
        this.router.navigate(['/fiches_maladie']);
      });
    }
  }
}
