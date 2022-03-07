import { Observable } from 'rxjs';
import { FicheMaladieService } from './../../../../service/fiches/fiche-maladie.service';
import { Component, OnInit } from '@angular/core';
import { FicheMaladie } from 'src/app/model/fiches/fiche-maladie';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-list-fiche-maladie',
  templateUrl: './list-fiche-maladie.component.html',
  styleUrls: ['./list-fiche-maladie.component.css']
})
export class ListFicheMaladieComponent implements OnInit {

  fichesMaladieObservable!: Observable<FicheMaladie[]>;

  constructor(private ficheMaladieService: FicheMaladieService) {}

  ngOnInit(): void {
    this.fichesMaladieObservable = this.ficheMaladieService.getAll();
  }

  delete(id: number) {
    this.ficheMaladieService.delete(id).subscribe((ok) => {
      this.fichesMaladieObservable = this.ficheMaladieService.getAll();
    });
  }

}
