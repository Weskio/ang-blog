import { TestBed } from '@angular/core/testing';

import { BlogArticlesService } from './blog-articles.service';

describe('BlogArticlesService', () => {
  let service: BlogArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
