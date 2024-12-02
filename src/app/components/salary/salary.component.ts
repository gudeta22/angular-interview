import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

interface Salary {
  id: number;
  candidateId: number;
  amount: number;
}

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css'],
})
export class SalaryComponent implements OnInit {
  salaries: Salary[] = []; // Explicitly typed as an array of Salary objects

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Fetch salaries and ensure the data is typed correctly
    this.dataService.getEntities<Salary>('salaries').subscribe((data: Salary[]) => {
      this.salaries = data;
    });
  }

  addSalary(candidateId: number, amount: number) {
    // Here we use Omit<Salary, 'id'> to exclude the id property when creating a new salary
    const newSalary: Omit<Salary, 'id'> = { candidateId, amount }; 

    // Send a request to add a new salary, expecting a full Salary object to be returned (with id)
    this.dataService.addEntity<Salary>('salaries', newSalary).subscribe((salary: Salary) => {
      this.salaries.push(salary); // Add the newly created salary to the list
    });
  }

  deleteSalary(id: number) {
    // Delete salary from the backend and update the list
    this.dataService.deleteEntity('salaries', id).subscribe(() => {
      // Remove the deleted salary from the list
      this.salaries = this.salaries.filter((s) => s.id !== id);
    });
  }
}
