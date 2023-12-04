import { Component, inject } from '@angular/core';
import { Blogdetails } from '../blogdetails';
import { BlogDetailsComponent } from "../blog-details/blog-details.component";
import { NgFor } from '@angular/common';
import { BlogArticlesService } from '../blog-articles.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BlogDetailsComponent, NgFor]
})
export class HomeComponent {
//injecting the blog articles service
  blogArticles= inject(BlogArticlesService)


 //passing service into blogList and adding blog number property
  blogList = this.blogArticles.getBlogArticle().map((blog,index)=>({
    ...blog,
    blogNumber: index + 1
  }));

  //constructor(private blogArticles: BlogArticlesService) { }


}
