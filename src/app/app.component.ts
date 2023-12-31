import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HomeComponent } from "./home/home.component";
import {RouterModule} from '@angular/router';
import { NewsletterComponent } from "./newsletter/newsletter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, SignUpComponent, HomeComponent, NewsletterComponent]
})
export class AppComponent {
  title = 'ang-blog';
}
