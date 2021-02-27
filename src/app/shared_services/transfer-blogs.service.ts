import { EventEmitter, Injectable } from '@angular/core';
import { Blog } from '../shared_models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class TransferBlogsService {
  
  transferUserAddedBlog:EventEmitter<Blog> = new EventEmitter;

  constructor() {
   }

}
