import { MaterialModule } from './material/material.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogheadComponent } from './bloghead/bloghead.component';
// import { BloghomeComponent } from './bloghome/bloghome.component';
// import { BlogprojectComponent } from './blogproject/blogproject.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogheadComponent,
    routingComponents
    // BloghomeComponent,
    // BlogprojectComponent,
    // ContactusComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
