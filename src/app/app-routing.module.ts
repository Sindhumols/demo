import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogprojectComponent } from './blogproject/blogproject.component';
import { BloghomeComponent } from './bloghome/bloghome.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {path:'home',component:BloghomeComponent},
  // {path:'aboutme',component:BlogprojectComponent},
  // {path:'project',component:ContactusComponent},
  // {path:'contact',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  BloghomeComponent,
  BlogprojectComponent,
  ContactusComponent,
  FooterComponent
]