import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { url } from 'inspector';
import { UserInfo } from 'os';
import { UserInterface } from '../user-interface';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  http = inject(HttpClient);
  authService = inject(AuthserviceService);
  router = inject(Router);

  profileForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    // alert(
    //   this.profileForm.value.name + '  |  ' +  this.profileForm.value.email + '  |  '
    // );

    this.http
      .post<{ user: UserInterface }>(
        'https://api.realworld.io/api/users/login',
        {
          user: this.profileForm.getRawValue(),
        }
      )
      .subscribe((response) => {
        console.log('response', response);
        localStorage.setItem('token', response.user.token);
        this.authService.currentUserSig.set(response.user);
        this.router.navigateByUrl('/home');
      });
  }
}
