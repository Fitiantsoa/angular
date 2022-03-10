import { FichePlante } from './../../../model/fiches/fiche-plante';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Emplacement } from 'src/app/model/emplacement';
import { Plante } from 'src/app/model/plante';
import { Terrain } from 'src/app/model/terrain';
import { TypePlante } from 'src/app/model/type-plante';
import { Utilisateur } from 'src/app/model/utilisateur';
import { FichePlanteService } from 'src/app/service/fiches/fiche-plante.service';
import { PlanteService } from 'src/app/service/plante.service';
import { TerrainService } from 'src/app/service/terrain.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css'],
})
export class TerrainComponent implements OnInit {
  // terrains: Terrain[] = [];
  utilisateur: Utilisateur = new Utilisateur();
  terrains: Terrain[] = [];
  plantes: Plante[] = [];
  //id: number =101;
  plante: Plante = new Plante();
  terrain: Terrain = new Terrain();
  typesPlante: string[] = [];
  fichesPlanteId: number[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private terrainService: TerrainService,
    //private login: string|undefined,
    private router: Router,
    private planteService: PlanteService,
    private ficheService: FichePlanteService
  ) {
    if (!this.utilisateur.terrain) {
      this.utilisateur.terrain = new Terrain();
      console.log('ici' + this.utilisateur.id);
    }
    //this.plante.typePlante = TypePlante.Ail;
  }

  ngOnInit(): void {
    //this.terrainService.get(101).subscribe((result) => {
    //  this.terrains = result;
    //})
    this.showInformation();
    this.getListPlante();
    //this.affichagePlante();
  }

  showInformation() {
    this.terrainService.get().subscribe((result) => {
      console.log(result);
      this.terrains = result;
    });
  }

  getListPlante() {
    this.ficheService.getAll().subscribe((result) => {
      for (let f of result) {
        this.typesPlante.push(f.nom!);
      }
    });
  }

  affichagePlante(e: any) {
    console.log(this.utilisateur!.terrain!.id!);
    this.terrainService
      .getTerrainWithPlantes(this.utilisateur!.terrain!.id!)
      .subscribe((result) => {
        this.plantes = result;
        for (let plante of this.plantes) {
          this.ficheService.getByNom(plante.typePlante!).subscribe((result) => {
            this.fichesPlanteId.push(result.id!);
          });
        }

        this.router.navigate(['/terrain']);
      });
  }

  ajoutPlante(p: any) {
    console.log(p + ' VARIABLE P');
    console.log(this.plante + ' this plante');
    this.plante.terrain = this.utilisateur!.terrain!;
    this.planteService.create(this.plante!).subscribe((ok) => {});
    this.affichagePlante(p);
  }

  ajoutTerrain() {
    console.log(this.terrain);
    this.terrainService.create(this.terrain).subscribe((ok) => {});
    this.showInformation();
    this.router.navigate(['/terrain']);
  }

  //this.terrainService.getTerrainWithPlantes(id).subscribe((ok) => {
  // this.plantes = const result;

  //});}
  routeConseil() {
    this.router.navigate(['/fiches_plante']);
  }

  giveImage(value: any) {
    let pathImage: string = '';
    switch (value) {
      case 'Carotte':
        pathImage = '../assets/images/carotte.png';
        break;
      case 'Ail':
        pathImage = '../assets/images/Ail.png';
        break;
      case 'Aubergine':
        pathImage = './assets/images/Auberginepetite.PNG';
        break;
      case 'Betterave':
        pathImage = '../assets/images/fiche-plante/plante/Betterave.png';
        break;
      case 'Carotte':
        pathImage = '../assets/images/carotte.png';
        break;
      case 'Concombre':
        pathImage = '../assets/images/fiche-plante/plante/Concombre.png';
        break;
      case 'Céléri':
        pathImage = '../assets/images/fiche-plante/plante/Céléri.png';
        break;
      case 'Chou':
        pathImage = './assets/images/fiche-plante/plante/Chou.png';
        break;
      case 'Courge':
        pathImage = './assets/images/fiche-plante/plante/Courge.png';
        break;
      case 'Courgette':
        pathImage = './assets/images/fiche-plante/plante/Courgette.png';
        break;
      case 'Fenouil':
        pathImage = './assets/images/fiche-plante/plante/Fenouil.png';
        break;
      case 'Fraisier':
        pathImage = './assets/images/fiche-plante/plante/Fraisier.png';
        break;
      case 'Haricot':
        pathImage = './assets/images/fiche-plante/plante/Haricot.png';
        break;
      case 'Laitue':
        pathImage = '../assets/images/fiche-plante/plante/Laitue.png';
        break;
      case 'Melon':
        pathImage = './assets/images/fiche-plante/plante/Melon.png';
        break;
      case 'Poireau':
        pathImage = './assets/images/fiche-plante/plante/Poireau.png';
        break;
      case 'Pois':
        pathImage = './assets/images/fiche-plante/plante/Pois.png';
        break;
      case 'Poivron':
        pathImage = './assets/images/fiche-plante/plante/Poivron.png';
        break;
      case 'Radis':
        pathImage = './assets/images/fiche-plante/plante/Radis.png';
        break;
      case 'Tomate':
        pathImage = '../assets/images/fiche-plante/plante/Tomate.png';
        break;
      default:
        pathImage = '../assets/images/carotte.png';
    }
    return pathImage;
  }
  //list() {
  //  let login= localStorage.getItem('login');
  //  this.terrainService.get(101);
  //}
}
