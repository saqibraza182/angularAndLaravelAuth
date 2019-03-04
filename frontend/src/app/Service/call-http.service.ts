import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallHttpService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8000/api';

  signup(data){
    return this.http.post(`${this.baseUrl}/signup `, data)
  }

  login(data){
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  sendPasswordResetLink(data){
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }

  changePassword(data){
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }

}
