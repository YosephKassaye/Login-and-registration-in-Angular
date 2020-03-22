import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable()
export class AuthService {

  baseUrl = environment.apiUrl + 'auth/';
  constructor(private http: HttpClient) {}
  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('username', model.username);
        }
      })
    );
  }
  register(model: any) {
    // model.SectionDepartmentsId = 1;
    // model.UserRolesId = 1;
    return this.http.post(this.baseUrl + 'register', model);
  }

  getUserDetail(model: any): any {
      return this.http.post(this.baseUrl + 'getUserDetail', model).pipe(
        map((response: any) => {
          const userDetail = response;
          if (userDetail) {
            localStorage.setItem('departmentId', userDetail);
          }
        }));
  }
}
