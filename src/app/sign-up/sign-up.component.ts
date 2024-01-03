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
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  http = inject(HttpClient);
  authService =inject(AuthserviceService);
  router = inject(Router)
  
  accountName =''

  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    // alert(
    //   this.profileForm.value.name + '  |  ' +  this.profileForm.value.email + '  |  '
    // );

    this.http
      .post<{ user: UserInterface }>('https://api.realworld.io/api/users', {
        user: this.profileForm.getRawValue(),
      })
      .subscribe((response) => {
        console.log('response', response);
        localStorage.setItem('token', response.user.token);
        this.authService.currentUserSig.set(response.user);
        this.router.navigateByUrl('/home')
        this.accountName = response.user.username
      });
  }
}
