import { Component } from '@angular/core';
import { Blogdetails } from '../blogdetails';
import { Input } from '@angular/core';
import { Sidebardetails } from '../sidebardetails';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() side! :Sidebardetails

}
