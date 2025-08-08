import { Component, OnInit } from '@angular/core';
import { JobsService, Job } from '../../services/jobs.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  loading = false;
  jobs: Job[] = [];
  displayedColumns = ['title', 'company', 'status', 'appliedDate', 'actions'];

  form = this.fb.group({
    title: ['', Validators.required],
    company: ['', Validators.required],
    status: ['Applied', Validators.required],
    appliedDate: [new Date()]
  });

  editId: string | null = null;
  editForm = this.fb.group({
    title: ['', Validators.required],
    company: ['', Validators.required],
    status: ['Applied', Validators.required],
    appliedDate: [new Date()]
  });

  constructor(private jobsService: JobsService, private fb: FormBuilder, private sb: MatSnackBar) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.jobsService.list().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.sb.open('Failed to load jobs', 'OK', { duration: 3000 });
      }
    });
  }

  submit() {
    if (this.form.invalid) return;
    const payload = { ...this.form.value } as Job;
    this.jobsService.create(payload).subscribe({
      next: (job) => {
        this.jobs.unshift(job);
        this.form.reset({ title: '', company: '', status: 'Applied', appliedDate: new Date() });
        this.sb.open('Job added', 'OK', { duration: 2000 });
      },
      error: (e) => this.sb.open(e?.error?.error || 'Failed to add job', 'OK', { duration: 3000 })
    });
  }

  startEdit(job: Job) {
    this.editId = job._id!;
    this.editForm.setValue({
      title: job.title,
      company: job.company,
      status: job.status,
      appliedDate: job.appliedDate ? new Date(job.appliedDate) : new Date()
    });
  }

  cancelEdit() {
    this.editId = null;
  }

  saveEdit(job: Job) {
    if (!this.editId || this.editForm.invalid) return;
    this.jobsService.update(this.editId, this.editForm.value as any).subscribe({
      next: (updated) => {
        const idx = this.jobs.findIndex(j => j._id === this.editId);
        if (idx > -1) this.jobs[idx] = updated;
        this.editId = null;
        this.sb.open('Job updated', 'OK', { duration: 2000 });
      },
      error: (e) => this.sb.open(e?.error?.error || 'Failed to update job', 'OK', { duration: 3000 })
    });
  }

  remove(job: Job) {
    if (!job._id) return;
    this.jobsService.delete(job._id).subscribe({
      next: () => {
        this.jobs = this.jobs.filter(j => j._id !== job._id);
        this.sb.open('Job deleted', 'OK', { duration: 2000 });
      },
      error: () => this.sb.open('Failed to delete job', 'OK', { duration: 3000 })
    });
  }
}
