import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

interface Company {
  id: number;
  name: string;
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  companies: Company[] = []; // Explicitly typed as an array of Company objects

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Fetch companies and ensure the data is typed
    this.dataService.getEntities<Company>('companies').subscribe((data: Company[]) => {
      this.companies = data;
    });
  }

  // Updated method to use Omit<Company, 'id'>
  addCompany(name: string) {
    const newCompany: Omit<Company, 'id'> = { name }; // id is omitted for creation

    // Pass Omit<Company, 'id'> to the addEntity method
    this.dataService.addEntity<Company>('companies', newCompany).subscribe((company: Company) => {
      this.companies.push(company); // Add the returned company (with id) to the list
    });
  }

  deleteCompany(id: number) {
    this.dataService.deleteEntity('companies', id).subscribe(() => {
      // Remove the deleted company from the list
      this.companies = this.companies.filter((c) => c.id !== id);
    });
  }
}
