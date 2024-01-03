import { Component, Input, inject } from '@angular/core';
import { Blogdetails } from '../blogdetails';
import { BlogDetailsComponent } from "../blog-details/blog-details.component";
import { NgFor } from '@angular/common';
import { BlogArticlesService } from '../blog-articles.service';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BlogDetailsComponent, NgFor, SidebarComponent]
})
export class HomeComponent {
//injecting the blog articles service



  blogArticles= inject(BlogArticlesService)


 //passing service into blogList and adding blog number property
  blogList = this.blogArticles.getBlogArticle().map((blog,index)=>({
    ...blog,
    blogNumber: index + 1
  }));

  sideBarDetails =[
    {
    id: 1,
    title:'Hydrogen Vs Electric Cars',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eaque dolor nemo?'
  },
  {
    id: 2,
    title:'The downsides of AI artistry',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eaque dolor nemo?'
  },
  {
    id: 3,
    title:'Is VC funding drying up?',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eaque dolor nemo?'
  }
]

  //constructor(private blogArticles: BlogArticlesService) { }


}
