import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
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
   //id: number =101;
   

  constructor  (
    private activatedRoute: ActivatedRoute,
    private terrainService: TerrainService, 
    //private login: string|undefined,
    private router: Router
    
  ) {
    if (!this.utilisateur.terrain){
      this.utilisateur.terrain= new Terrain()
    }
    }

 

  ngOnInit(): void {

    //this.terrainService.get(101).subscribe((result) => {
    //  this.terrains = result;
    //})
    this.showInformation();
    
  }

  showInformation() {
      this.terrainService.get().subscribe((result) => {
      this.terrains = result;
    });
  }
  
   
  
  //list() { 
  //  let login= localStorage.getItem('login');
  //  this.terrainService.get(101);
  //}
  
 
}



