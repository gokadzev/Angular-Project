import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared_models/blog.model';
import { TransferBlogsService } from 'src/app/shared_services/transfer-blogs.service';

@Component({
  selector: 'app-blog-creator',
  templateUrl: './blog-creator.component.html',
  styleUrls: ['./blog-creator.component.css']
})
export class BlogCreatorComponent implements OnInit {

  newBlog:Blog = new Blog('','','','');
  
  blogid = 0;

  constructor(private userBlogTransferer:TransferBlogsService,) { }

  ngOnInit(): void {
  }


  onAddBlogButton(){
    this.userBlogTransferer.transferUserAddedBlog.emit(this.newBlog);
    this.newBlog = new Blog('','','','');
    
  }

  


}
