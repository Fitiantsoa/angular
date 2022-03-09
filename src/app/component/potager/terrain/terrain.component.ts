import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Observable } from 'rxjs';
import { Emplacement } from 'src/app/model/emplacement';
import { Plante } from 'src/app/model/plante';
import { Terrain } from 'src/app/model/terrain';
import { TypePlante } from 'src/app/model/type-plante';
import { Utilisateur } from 'src/app/model/utilisateur';
import { PlanteService } from 'src/app/service/plante.service';
import { TerrainService } from 'src/app/service/terrain.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {

   // terrains: Terrain[] = [];
   utilisateur: Utilisateur = new Utilisateur();
   terrains: Terrain[]= [];
   plantes: Plante[]= [];
   //id: number =101;
   plante: Plante = new Plante();
   typesPlante= TypePlante;
   

  constructor  (
    private activatedRoute: ActivatedRoute,
    private terrainService: TerrainService, 
    //private login: string|undefined,
    private router: Router,
    private planteService: PlanteService
  ) {
    if (!this.utilisateur.terrain){
      this.utilisateur.terrain= new Terrain();
      console.log("ici" + this.utilisateur.id);
    }
    //this.plante.typePlante = TypePlante.Ail;
    }

 

  ngOnInit(): void {

    //this.terrainService.get(101).subscribe((result) => {
    //  this.terrains = result;
    //})
    this.showInformation();
    //this.affichagePlante();
    
  }

  showInformation() {
      this.terrainService.get().subscribe((result) => {
      this.terrains = result;
    });
  }
  
  affichagePlante(e: any) {
    console.log(this.utilisateur!.terrain!.id!);
    this.terrainService.getTerrainWithPlantes(this.utilisateur!.terrain!.id!).subscribe((result) => {
      this.plantes = result;
      
     // this.router.navigate(['/terrain']);
    });}

  ajoutPlante(p: any){
    
    this.plante.terrain=this.utilisateur!.terrain!;
    

    this.planteService.create(this.plante!).subscribe((ok) => {})
  }

  
    //this.terrainService.getTerrainWithPlantes(id).subscribe((ok) => {
    // this.plantes = const result;
      
    //});}


  giveImage(value: any){
    let pathImage: string='';
     switch(value){
     case 'Carotte': pathImage='../assets/images/carotte.png';
      break;
      case 'Ail': pathImage='../assets/images/Ail.png';
      break;
      case 'Aubergine': pathImage='./assets/images/Auberginepetite.PNG';
      break;
      case 'Carotte': pathImage='../assets/images/carotte.png';
      break;
      case 'Brocoli': pathImage='../assets/images/brocoli.png';
      break;
      case 'Choux': pathImage='./assets/images/fiche-plante/plante/10.PNG';
      break;
      case 'Choux_Fleurs': pathImage='../assets/images/fiche-plante/plante/15.PNG';
      break;
      case 'Courgette': pathImage='../assets/images/fiche-plante/plante/14.png';
      break;
     default: pathImage='../assets/images/bebecarotte.png';
    }
    return pathImage;
 }
  //list() { 
  //  let login= localStorage.getItem('login');
  //  this.terrainService.get(101);
  //}
  
 
}


