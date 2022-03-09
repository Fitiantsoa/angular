import { ProduitsComponent } from './component/produits/produits.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { IsLoggedOutGuard } from './guard/is-logged-out/is-logged-out.guard';
import { IsLoggedInGuard } from './guard/is-logged-in/is-logged-in.guard';
import { ListAchatComponent } from './component/commande/achat/list/list-achat.component';
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
import { TerrainComponent } from './component/potager/terrain/terrain.component';
import { AfficheFicheRavageurComponent } from './component/fiches/fiche-ravageur/affiche-fiche-ravageur/affiche-fiche-ravageur.component';
import { DetailsCommandeComponent } from './component/commande/details/details-commande.component';
import { FonctionnementComponent } from './component/fonctionnement/fonctionnement.component';
import { ListProduitsVendreComponent } from './component/vendre/list-produits-vendre/list-produits-vendre.component';
import { CommandeComponent } from './component/commande/commande.component';
import { ListVenteComponent } from './component/commande/vente/list/list-vente.component';
import { ContactComponent } from './component/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { AchatComponent } from './component/acheter/achat/achat.component';

const routes: Routes = [
  {
    path: 'home',
    component: AccueilComponent,
    canActivate: [IsLoggedOutGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'inscription',
    component: InscriptionComponent,
    canActivate: [IsLoggedOutGuard],
  },

  {
    path: 'fonctionnement',
    component: FonctionnementComponent,
    canActivate: [IsLoggedOutGuard],
  },
  {
    path: 'achat',
    component: ProduitsComponent,
    canActivate: [IsLoggedInGuard],
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
    data: { title: 'Mon compte' },
  },

  {
    path: 'terrain',
    component: TerrainComponent,
    canActivate: [IsLoggedInGuard],
  },

  {
    path: 'commandes',
    component: CommandeComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'achat',
      },
      {
        path: 'achat',
        component: ListAchatComponent,
        data: { title: 'Mes achats' },
        children: [
          {
            path: ':id',
            component: DetailsCommandeComponent,
            data: { title: 'Mes achats' },
          },
        ],
      },
      {
        path: 'vente',
        component: ListVenteComponent,
        data: { title: 'Mes ventes' },
        children: [
          {
            path: ':id',
            component: DetailsCommandeComponent,
            data: { title: 'Mes ventes' },
          },
        ],
      },
    ],
  },
  {
    path: 'acheter/:id',
    component: AchatComponent,
    canActivate: [IsLoggedInGuard],
  },

  {
    path: 'vendre',
    component: ListProduitsVendreComponent,
    canActivate: [IsLoggedInGuard],
  },

  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [IsLoggedOutGuard],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
