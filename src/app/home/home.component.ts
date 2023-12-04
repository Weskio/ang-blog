import { Component } from '@angular/core';
import { Blogdetails } from '../blogdetails';
import { BlogDetailsComponent } from "../blog-details/blog-details.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BlogDetailsComponent, NgFor]
})
export class HomeComponent {
  blogList= [{
    id: 1,
    blogNumber:1,
    title:'Reviving retro PCs',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis magni natus.',
    photo:"../../assets/images/image-retro-pcs.jpg",
    link:''
},
{
  id: 2,
  blogNumber:2,
  title:'Top 10 laptops of 2022',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis magni natus.',
  photo:"../../assets/images/image-top-laptops.jpg",
  link:''
},
{
  id: 3,
  blogNumber:3,
  title:'the growth of gaming',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis magni natus.',
  photo:"../../assets/images/image-gaming-growth.jpg",
  link:'#'
}

]
}
