import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

interface Department {
  id: number;
  name: string;
  companyId: number;
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = []; // Explicitly typed as Department array

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Fetch departments and ensure the data is typed
    this.dataService.getEntities<Department>('departments').subscribe((data: Department[]) => {
      this.departments = data;
    });
  }

  // Fix: Use Omit<Department, 'id'> instead of Partial<Department>
  addDepartment(name: string, companyId: number) {
    const newDepartment: Omit<Department, 'id'> = { name, companyId }; // id is omitted for creation

    // API call to add the department, and handle the response as a full Department
    this.dataService.addEntity<Department>('departments', newDepartment).subscribe((department: Department) => {
      this.departments.push(department); // Add the new department to the list
    });
  }

  deleteDepartment(id: number) {
    // Delete department from the backend, and update the list
    this.dataService.deleteEntity('departments', id).subscribe(() => {
      this.departments = this.departments.filter((d) => d.id !== id); // Remove the department with the matching id
    });
  }
}
