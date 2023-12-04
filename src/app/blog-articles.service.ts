import { Injectable } from '@angular/core';
import { Blogdetails } from './blogdetails';

@Injectable({
  providedIn: 'root'
})
export class BlogArticlesService {

  blogArticle = [{
    id: 1,
    title:'Reviving retro PCs',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis magni natus.',
    photo:"../../assets/images/image-retro-pcs.jpg",
    link:''
},
{
  id: 2,
  title:'Top 10 laptops of 2022',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis magni natus.',
  photo:"../../assets/images/image-top-laptops.jpg",
  link:''
},
{
  id: 3,
  title:'the growth of gaming',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis magni natus.',
  photo:"../../assets/images/image-gaming-growth.jpg",
  link:'#'
}
]

getBlogArticle(){
  return this.blogArticle
}

  constructor() { }
}
