import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Title } from "@angular/platform-browser";
import { filter, map, mergeMap } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'VGarden';
  monlogin = '';

  constructor(private titleService: Title,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.updateTitle();
  }

  private updateTitle(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        if(event['title']) {
          this.titleService.setTitle(`${event['title']} - VGarden`);
        }
      });
  }

  get authentificated() {
    return this.authService.isAuthenticated();
  }

  get login() {
    return localStorage.getItem('login');
  }
}
