import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { IsLoggedOutGuard } from './guard/is-logged-out/is-logged-out.guard';
import { IsLoggedInGuard } from './guard/is-logged-in/is-logged-in.guard';
import { ListCommandeComponent } from './component/commande/list/list-commande.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ListFichePlanteComponent } from './component/fiches/fiche-plante/list-fiche-plante/list-fiche-plante.component';
import { EditFichePlanteComponent } from './component/fiches/fiche-plante/edit-fiche-plante/edit-fiche-plante.component';
import { AfficheFichePlanteComponent } from './component/fiches/fiche-plante/affiche-fiche-plante/affiche-fiche-plante.component';
import { SemerPlanteComponent } from './component/fiches/fiche-plante/semer-plante/semer-plante.component';
import { PlanterPlanteComponent } from './component/fiches/fiche-plante/planter-plante/planter-plante.component';
import { EntretienPlanteComponent } from './component/fiches/fiche-plante/entretien-plante/entretien-plante.component';
import { RecolterPlanteComponent } from './component/fiches/fiche-plante/recolter-plante/recolter-plante.component';
import { ListFicheMaladieComponent } from './component/fiches/fiche-maladie/list-fiche-maladie/list-fiche-maladie.component';
import { EditFicheMaladieComponent } from './component/fiches/fiche-maladie/edit-fiche-maladie/edit-fiche-maladie.component';
import { AfficheFicheMaladieComponent } from './component/fiches/fiche-maladie/affiche-fiche-maladie/affiche-fiche-maladie.component';
import { ListFicheRavageurComponent } from './component/fiches/fiche-ravageur/list-fiche-ravageur/list-fiche-ravageur.component';
import { EditFicheRavageurComponent } from './component/fiches/fiche-ravageur/edit-fiche-ravageur/edit-fiche-ravageur.component';
import { AfficheFicheRavageurComponent } from './component/fiches/fiche-ravageur/affiche-fiche-ravageur/affiche-fiche-ravageur.component';
import { DetailsCommandeComponent } from "./component/commande/details/details-commande.component";

const routes: Routes = [
  {
    path: 'home',
    component: AccueilComponent,
    canActivate: [IsLoggedOutGuard],
  },
  { path: 'login', component: LoginComponent, canActivate: [IsLoggedOutGuard] },
  {
    path: 'inscription',
    component: InscriptionComponent,
    canActivate: [IsLoggedOutGuard],
  },


  {
    path: 'fiches_plante',
    component: ListFichePlanteComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_plante/edit',
    component: EditFichePlanteComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_plante/edit/:id',
    component: EditFichePlanteComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_plante/edit/:id',
    component: EditFichePlanteComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_plante/perso/:id',
    component: AfficheFichePlanteComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_plante/semer/:id',
    component: SemerPlanteComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_plante/planter/:id',
    component: PlanterPlanteComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_plante/entretien/:id',
    component: EntretienPlanteComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_plante/recolter/:id',
    component: RecolterPlanteComponent,
    canActivate: [IsLoggedInGuard],
  },

  {
    path: 'fiches_maladie',
    component: ListFicheMaladieComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_maladie/edit',
    component: EditFicheMaladieComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_maladie/edit/:id',
    component: EditFicheMaladieComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_maladie/perso/:id',
    component: AfficheFicheMaladieComponent,
    canActivate: [IsLoggedInGuard],
  },


  {
    path: 'fiches_ravageur',
    component: ListFicheRavageurComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_ravageur/edit',
    component: EditFicheRavageurComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_ravageur/edit/:id',
    component: EditFicheRavageurComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'fiches_ravageur/perso/:id',
    component: AfficheFicheRavageurComponent,
    canActivate: [IsLoggedInGuard],
  },

  {
    path: 'user',
    component: UtilisateurComponent,
    canActivate: [IsLoggedInGuard],
    data: {title: 'Mon compte'}
  },
  {
    path: 'commandes',
    component: ListCommandeComponent,
    canActivate: [IsLoggedInGuard],
    data: {title: 'Mes commandes'},
    children: [
      {
        path: ':id',
        component: DetailsCommandeComponent,
        canActivate: [IsLoggedInGuard]
      }
    ]
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
