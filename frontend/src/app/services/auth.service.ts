import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface AuthResponse {
  token: string;
  user: { id: string; name: string; email: string };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = '/api/auth';
  constructor(private http: HttpClient) {}

  register(payload: { name: string; email: string; password: string }) {
    return this.http.post<AuthResponse>(`${this.base}/register`, payload).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
      })
    );
  }

  login(payload: { email: string; password: string }) {
    return this.http.post<AuthResponse>(`${this.base}/login`, payload).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getUser() {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  }
}
