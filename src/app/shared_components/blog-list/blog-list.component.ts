import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared_models/blog.model';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { TransferBlogsService } from 'src/app/shared_services/transfer-blogs.service';
import { ApiService } from 'src/app/shared_services/api.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
   
   faAngleLeft = faAngleLeft;
   faAngleRight = faAngleRight;
   startShowNumFrom = 0;
   endShowNumTo = 4;
   showAddBlogWindow = false;
   apiUrl:string = 'https://newsapi.org/v2/everything?q=web-development&apiKey=f9402e8ed99a4cfd86097825397d0406';

   userBlogs:Blog[] = [];

  constructor(private userBlogTransferer:TransferBlogsService, private webRequest:ApiService) {}
  
  getDataFromApi(){
   this.webRequest.getDataFromApi(this.apiUrl).subscribe((response:any) => {
     this.userBlogs = response.articles;
   });
 }

   showBlogCreator(){
      if(this.showAddBlogWindow == true){
         this.showAddBlogWindow = false;
      } else {
         this.showAddBlogWindow = true;
      }
   }

   goToNext() {
      this.startShowNumFrom = this.startShowNumFrom + 4;
      this.endShowNumTo = this.endShowNumTo + 4;

   }

   goToBack() {
      this.startShowNumFrom = this.startShowNumFrom - 4;
      this.endShowNumTo = this.endShowNumTo - 4;
    }







  ngOnInit(): void {
    this.getDataFromApi();
    this.userBlogTransferer.transferUserAddedBlog.subscribe((item:Blog) => {
    this.userBlogs.unshift(item);
   });


}
   
}



