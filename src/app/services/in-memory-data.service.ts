import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const candidates = [
      { id: 1, name: 'Alice', departmentId: 1 },
      { id: 2, name: 'Bob', departmentId: 2 },
    ];
    const companies = [
      { id: 1, name: 'Tech Corp' },
      { id: 2, name: 'Innovate Ltd' },
    ];
    const departments = [
      { id: 1, name: 'Engineering', companyId: 1 },
      { id: 2, name: 'HR', companyId: 2 },
    ];
    const salaries = [
      { id: 1, candidateId: 1, amount: 5000 },
      { id: 2, candidateId: 2, amount: 4500 },
    ];

    return { candidates, companies, departments, salaries };
  }
}
