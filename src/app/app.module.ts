import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import the routing module
import { AppComponent } from './app.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CompanyComponent } from './components/company/company.component';
import { DepartmentComponent } from './components/department/department.component';
import { SalaryComponent } from './components/salary/salary.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    CompanyComponent,
    DepartmentComponent,
    SalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Make sure AppRoutingModule is added here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
