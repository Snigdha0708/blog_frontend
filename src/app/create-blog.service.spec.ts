import { TestBed } from '@angular/core/testing';

import { CreateBlogService } from './create-blog.service';

describe('CreateBlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateBlogService = TestBed.get(CreateBlogService);
    expect(service).toBeTruthy();
  });
});
