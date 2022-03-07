import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./component/login/login.component";
import { InscriptionComponent } from "./component/inscription/inscription.component";
import { UtilisateurComponent } from "./component/utilisateur/utilisateur.component";
import { IntrouvableComponent } from "./component/introuvable/introuvable.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'user/:login', component: UtilisateurComponent },
  { path: '**', component: IntrouvableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
