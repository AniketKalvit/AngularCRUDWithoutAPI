import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { MenuComponent } from './menu/menu.component';
import { EmployeeService } from './employee/employee.servie';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentComponent } from './department/department.component';
import { DepartmentSerice } from './department/department.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MenuComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService,DepartmentSerice],
  bootstrap: [AppComponent]
})
export class AppModule { }
