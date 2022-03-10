import { debounceTime, map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string='';
  email: string='';
  message: string='';


  form!: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      message: new FormControl('', [
        Validators.required,
      ]),

    });
  }

    sendForm() {


      this.router.navigate(['/home']);
      alert('Votre message a bien été envoyé!')
    }

}
