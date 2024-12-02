import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

interface Candidate {
  id: number;
  name: string;
  departmentId: number;
}

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent implements OnInit {
  candidates: Candidate[] = []; // Explicitly typed as an array of Candidate

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getEntities<Candidate>('candidates').subscribe((data: Candidate[]) => {
      this.candidates = data;
    });
  }

  // Fixing the addCandidate method by using Omit<Candidate, 'id'>
  addCandidate(name: string, departmentId: number) {
    const newCandidate: Omit<Candidate, 'id'> = { name, departmentId }; // id is omitted for creation

    // Add the entity without the 'id', and receive the full Candidate object in return
    this.dataService.addEntity<Candidate>('candidates', newCandidate).subscribe((candidate: Candidate) => {
      this.candidates.push(candidate); // Full Candidate object returned, including id
    });
  }

  deleteCandidate(id: number) {
    this.dataService.deleteEntity('candidates', id).subscribe(() => {
      this.candidates = this.candidates.filter((c) => c.id !== id);
    });
  }
}
