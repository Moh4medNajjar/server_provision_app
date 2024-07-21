import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  signUpRequester(requesterData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/requesters`, requesterData);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/requesters/login`, { email, password });
  }

  // Function to store token in local storage (optional)
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Function to get token from local storage (optional)
  getToken() {
    return localStorage.getItem('token');
  }

  // Function to remove token from local storage (optional)
  removeToken() {
    localStorage.removeItem('token');
  }
}
