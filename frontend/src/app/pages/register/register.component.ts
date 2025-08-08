import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

function matchValidator(a: AbstractControl, b: AbstractControl) {
  return () => {
    if (a.value !== b.value) b.setErrors({ mismatch: true });
    else if (b.hasError('mismatch')) b.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    return null;
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loading = false;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private sb: MatSnackBar
  ) {
    this.form.setValidators(matchValidator(this.form.controls.password, this.form.controls.confirm));
  }

  submit() {
    if (this.form.invalid) return;
    const { name, email, password } = this.form.value;
    this.loading = true;
    this.auth.register({ name: name!, email: email!, password: password! }).subscribe({
      next: () => {
        this.loading = false;
        this.sb.open('Registered successfully', 'OK', { duration: 2000 });
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.loading = false;
        this.sb.open(err?.error?.error || 'Registration failed', 'OK', { duration: 3000 });
      }
    });
  }
}
