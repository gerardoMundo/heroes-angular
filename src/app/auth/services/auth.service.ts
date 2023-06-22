import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  private user?: User;
  private baseUrl = environments.baseUrl;

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return { ...this.user };
  }

  logIn(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      tap((user) => localStorage.setItem('token', user.id.toString()))
    );
  }

  constructor(private http: HttpClient) {}
}
