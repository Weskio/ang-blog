import { Component, Input } from '@angular/core';
import { Blogdetails } from '../blogdetails';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {
  //setting up blog to adhere blogdetails interface
  @Input() blog!:Blogdetails;

}
