import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'api'; // In-memory API root

  constructor(private http: HttpClient) {}

  // Generic method to get entities
  getEntities<T>(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${endpoint}`);
  }

  // Generic method to add an entity
  addEntity<T>(endpoint: string, entity: Omit<T, 'id'>): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, entity);
  }

  // Generic method to update an entity (with id constraint)
  updateEntity<T extends { id: number }>(endpoint: string, entity: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}/${entity.id}`, entity);
  }

  // Generic method to delete an entity by id
  deleteEntity(endpoint: string, id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${endpoint}/${id}`);
  }
}
