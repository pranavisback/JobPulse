import { Component, OnInit } from '@angular/core';
import { JobsService, Job } from '../../services/jobs.service';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading = false;
  jobs: Job[] = [];
  total = 0;
  counts: Record<string, number> = { Applied: 0, Interview: 0, Offer: 0, Rejected: 0 };

  doughnutData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Applied', 'Interview', 'Offer', 'Rejected'],
    datasets: [{ data: [0, 0, 0, 0], backgroundColor: ['#42a5f5', '#66bb6a', '#ffa726', '#ef5350'] }]
  };

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.jobsService.list().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.total = jobs.length;
        this.counts = { Applied: 0, Interview: 0, Offer: 0, Rejected: 0 };
        for (const j of jobs) this.counts[j.status] = (this.counts[j.status] || 0) + 1;
        this.doughnutData = {
          ...this.doughnutData,
          datasets: [{ data: [this.counts.Applied, this.counts.Interview, this.counts.Offer, this.counts.Rejected], backgroundColor: ['#42a5f5', '#66bb6a', '#ffa726', '#ef5350'] }]
        };
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }
}
