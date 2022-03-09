import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Observable } from 'rxjs';
import { Plante } from 'src/app/model/plante';
import { Terrain } from 'src/app/model/terrain';
import { Utilisateur } from 'src/app/model/utilisateur';
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
   

  constructor  (
    private activatedRoute: ActivatedRoute,
    private terrainService: TerrainService, 
    //private login: string|undefined,
    private router: Router
    
  ) {
    if (!this.utilisateur.terrain){
      this.utilisateur.terrain= new Terrain();
      console.log("ici" + this.utilisateur.id);
    }
    }

 

  ngOnInit(): void {

    //this.terrainService.get(101).subscribe((result) => {
    //  this.terrains = result;
    //})
    this.showInformation();
    this.affichagePlante(1);
    
  }

  showInformation() {
      this.terrainService.get().subscribe((result) => {
      this.terrains = result;
    });
  }
  
  affichagePlante(id: number) {
      this.terrainService.getTerrainWithPlantes(id).subscribe((result) => {
      this.plantes = result;
      this.router.navigate(['/terrain']);
    });}
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
     default: pathImage='../assets/images/bebecarotte.png';
    }
    return pathImage;
 }
  //list() { 
  //  let login= localStorage.getItem('login');
  //  this.terrainService.get(101);
  //}
  
 
}


