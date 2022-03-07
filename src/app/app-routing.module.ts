import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./component/login/login.component";
import { InscriptionComponent } from "./component/inscription/inscription.component";
import { UtilisateurComponent } from "./component/utilisateur/utilisateur.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";
import { IsLoggedOutGuard } from "./guard/is-logged-out/is-logged-out.guard";
import { IsLoggedInGuard } from "./guard/is-logged-in/is-logged-in.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [IsLoggedOutGuard] },
  { path: 'inscription', component: InscriptionComponent, canActivate: [IsLoggedOutGuard] },
  { path: 'user', component: UtilisateurComponent, canActivate: [IsLoggedInGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
