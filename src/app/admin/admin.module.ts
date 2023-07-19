import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateblogComponent } from './createblog/createblog.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './display/display.component';
import { DisplaycategoryComponent } from './displaycategory/displaycategory.component';
import { EditblogComponent } from './editblog/editblog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewComponent } from './view/view.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateblogComponent,
    CreatecategoryComponent,
    DashboardComponent,
    DisplayComponent,
    DisplaycategoryComponent,
    EditblogComponent,
    SidebarComponent,
    ViewComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
