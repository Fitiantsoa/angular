import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
import { PotagerComponent } from './component/potager/potager.component';
import { RubanComponent } from './component/ruban/ruban.component';
import { EditFicheMaladieComponent } from './component/fiches/fiche-maladie/edit-fiche-maladie/edit-fiche-maladie.component';
import { ListFicheMaladieComponent } from './component/fiches/fiche-maladie/list-fiche-maladie/list-fiche-maladie.component';
import { EditFichePlanteComponent } from './component/fiches/fiche-plante/edit-fiche-plante/edit-fiche-plante.component';
import { ListFichePlanteComponent } from './component/fiches/fiche-plante/list-fiche-plante/list-fiche-plante.component';
import { EditFicheRavageurComponent } from './component/fiches/fiche-ravageur/edit-fiche-ravageur/edit-fiche-ravageur.component';
import { ListFicheRavageurComponent } from './component/fiches/fiche-ravageur/list-fiche-ravageur/list-fiche-ravageur.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { InformationComponent } from './component/utilisateur/information/information.component';
import { CommandeComponent } from './component/commande/commande.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { RubanAccueilComponent } from './component/ruban-accueil/ruban-accueil.component';
import { FonctionnementComponent } from './component/fonctionnement/fonctionnement.component';
import { LocalisationComponent } from './component/localisation/localisation.component';
import { RubanCompteComponent } from './component/ruban-compte/ruban-compte.component';
import { CompteComponent } from './component/inscription/compte/compte.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    UtilisateurComponent,
    PotagerComponent,
    RubanComponent,
    EditFicheMaladieComponent,
    ListFicheMaladieComponent,
    EditFichePlanteComponent,
    ListFichePlanteComponent,
    EditFicheRavageurComponent,
    ListFicheRavageurComponent,
    InformationComponent,
    CommandeComponent,
    AccueilComponent,
    RubanAccueilComponent,
    FonctionnementComponent,
    LocalisationComponent,
    RubanCompteComponent,
    CompteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //GeoApiGouvAddressModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
