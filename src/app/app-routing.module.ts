import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './shared_components/about/about.component';
import { BlogListComponent } from './shared_components/blog-list/blog-list.component';
import { BodyComponent } from './shared_components/body/body.component';
import { ContactComponent } from './shared_components/contact/contact.component';
import { EducationComponent } from './shared_components/education/education.component';

const routes: Routes = [
  {path:"",component:BodyComponent},
  {path:'aboutPage',component:AboutComponent},
  {path:'contactPage',component:ContactComponent},
  {path:'educationPage',component:EducationComponent},
  {path:'blogPage',component:BlogListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
