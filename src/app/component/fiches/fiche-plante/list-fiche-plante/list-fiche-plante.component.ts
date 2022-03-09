import { AuthService } from 'src/app/service/auth.service';
import { Observable } from 'rxjs';
import { FichePlanteService } from './../../../../service/fiches/fiche-plante.service';
import { Component, OnInit } from '@angular/core';
import { FichePlante } from 'src/app/model/fiches/fiche-plante';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-list-fiche-plante',
  templateUrl: './list-fiche-plante.component.html',
  styleUrls: ['./list-fiche-plante.component.css']
})
export class ListFichePlanteComponent implements OnInit {

  fichesPlanteObservable!: Observable<FichePlante[]>;

  constructor(private fichePlanteService: FichePlanteService, private authService: AuthService) {}

  ngOnInit(): void {
    this.fichesPlanteObservable = this.fichePlanteService.getAll();
  }

  delete(id: number) {
    this.fichePlanteService.delete(id).subscribe((ok) => {
      this.fichesPlanteObservable = this.fichePlanteService.getAll();
    });
  }

  get role() {
    return this.authService.role();
  }

}
