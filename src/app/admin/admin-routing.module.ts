import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateblogComponent } from './createblog/createblog.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { DisplaycategoryComponent } from './displaycategory/displaycategory.component';
import { EditblogComponent } from './editblog/editblog.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path:'admin/dashboard',
    component:DashboardComponent
  },
  {
    path:'admin/createblog',
    component:CreateblogComponent
  },
  {
    path:'admin/display',
    component:DisplayComponent
  },
  {
    path:'admin/displaycategory',
    component:DisplaycategoryComponent          
  },
  {
    path:'admin/createcategory',
    component:CreatecategoryComponent
  },
  {
  path:'admin/editblog',
  component:EditblogComponent
  },
  {
    path:'admin/sidebar',
    component:SidebarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
