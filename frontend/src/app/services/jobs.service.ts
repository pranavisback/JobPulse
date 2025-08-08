import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Job {
  _id?: string;
  title: string;
  company: string;
  status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
  appliedDate?: string | Date;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({ providedIn: 'root' })
export class JobsService {
  private base = '/api/jobs';
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Job[]>(this.base);
  }
  create(job: Job) {
    return this.http.post<Job>(this.base, job);
  }
  update(id: string, job: Partial<Job>) {
    return this.http.put<Job>(`${this.base}/${id}`, job);
  }
  delete(id: string) {
    return this.http.delete<{ success: boolean }>(`${this.base}/${id}`);
  }
}
