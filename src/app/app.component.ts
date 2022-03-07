import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'VGarden';
  monlogin = '';

  constructor(private authService: AuthService, private router: Router) {}

  get authentificated() {
    return this.authService.isAuthenticated();
  }

  get login() {
    return localStorage.getItem('login');
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/accueil');
  }

}
