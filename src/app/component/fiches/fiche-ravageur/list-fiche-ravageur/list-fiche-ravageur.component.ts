import { AuthService } from 'src/app/service/auth.service';
import { Observable } from 'rxjs';
import { FicheRavageurService } from './../../../../service/fiches/fiche-ravageur.service';
import { Component, OnInit } from '@angular/core';
import { FicheRavageur } from 'src/app/model/fiches/fiche-ravageur';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-list-fiche-ravageur',
  templateUrl: './list-fiche-ravageur.component.html',
  styleUrls: ['./list-fiche-ravageur.component.css']
})
export class ListFicheRavageurComponent implements OnInit {

  fichesRavageurObservable!: Observable<FicheRavageur[]>;

  constructor(private ficheRavageurService: FicheRavageurService, private authService: AuthService) {}

  ngOnInit(): void {
    this.fichesRavageurObservable = this.ficheRavageurService.getAll();
  }

  delete(id: number) {
    this.ficheRavageurService.delete(id).subscribe((ok) => {
      this.fichesRavageurObservable = this.ficheRavageurService.getAll();
    });
  }

  get role() {
    return this.authService.role();
  }

}
