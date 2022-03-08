import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruban-compte',
  templateUrl: './ruban-compte.component.html',
  styleUrls: ['./ruban-compte.component.css'],
})
export class RubanCompteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }
}
