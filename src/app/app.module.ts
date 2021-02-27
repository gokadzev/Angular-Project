import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './shared_components/header/header.component';
import { BodyComponent } from './shared_components/body/body.component';
import { EducationComponent } from './shared_components/education/education.component';
import { AboutComponent } from './shared_components/about/about.component';
import { ContactComponent } from './shared_components/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './shared_components/blog/blog.component';
import { BlogListComponent } from './shared_components/blog-list/blog-list.component';
import { TransferBlogsService } from './shared_services/transfer-blogs.service';
import { BlogCreatorComponent } from './shared_components/blog/blog-creator/blog-creator.component';
import { ApiService } from './shared_services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    EducationComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    BlogListComponent,
    BlogCreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [TransferBlogsService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
