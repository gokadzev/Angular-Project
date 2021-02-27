import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared_models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input()
  blog!: Blog;
  constructor() { }

  ngOnInit(): void {
  }


}