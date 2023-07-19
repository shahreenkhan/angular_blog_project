import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { RegisterComponent } from './admin/register/register.component';
import { ViewComponent } from './admin/view/view.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { ContactComponent } from './contact/contact.component';
import { EditaboutComponent } from './editabout/editabout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent

  },
  {
    path:"editabout",
    component:EditaboutComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"addcontact",
    component:AddcontactComponent
  },
  {
    path:"viewcontact",
    component:ViewcontactComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"blogdetail/:id",
    component:BlogdetailComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"**",
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
