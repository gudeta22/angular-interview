import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CompanyComponent } from './components/company/company.component';
import { DepartmentComponent } from './components/department/department.component';
import { SalaryComponent } from './components/salary/salary.component';


// Define the application routes
const routes: Routes = [
  { path: 'candidates', component: CandidateComponent },
  { path: 'companies', component: CompanyComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: 'salaries', component: SalaryComponent },
  { path: '', redirectTo: '/candidates', pathMatch: 'full' }  // Default redirect to candidates
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuring routes
  exports: [RouterModule] // Export the RouterModule so it can be used elsewhere
})
export class AppRoutingModule {}
