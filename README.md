# Login and Registration Example in Angular 8

This sample project is to present simple login and register application using Angular 8 framework. The sample code has login component calling dotnet restsful API. For dotnet Restul API, you can refer my sample code from <a href="https://github.com/YosephKassaye/dotnet-Core-Api-Accessing-SQL-Server">Dotnet Core API</a>

### Contents

[About this sample](#about-this-sample)<br/>
[Before you begin](#before-you-begin)<br/>
[Run this sample](#run-this-sample)<br/>
[Sample details](#sample-details)<br/>
[Disclaimers](#disclaimers)<br/>
[Related links](#related-links)<br/>

<a name=about-this-sample></a>

## About this sample

- **Applies to:** Angular 8
- **Key features:**  Develop login and registration application using Angular 8
- **Programming Language:** TypeScript, Angular
- **Authors:** Yoseph A. Kassaye

<a name=before-you-begin></a>

## Before you begin

To run this sample, you need the following prerequisites.

**Software prerequisites:**

1. Visual Studio Code Editor

<a name=run-this-sample></a>

## Run this sample

### Setup

1. Create a login and Register component as:

```
  ng g c login
  ng g c register
```

2. Create a folder called _service under app folder and create a service called auth as:

```
  ng g s auth
```
3. Open environment.ts file from environments folder and specify the url envirnment as:
```
 export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api/'
};
```
4. open auth.service.ts, import environment component and declare a base url to assign the above api URl as follows:

```
 import { environment } from './../../environments/environment';
   baseUrl = environment.apiUrl + 'auth/';
```  
5. The auth-service.ts file will look like the follwing:
```
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

```
Note: - 'login', 'register' and 'getUserDetail' are Web API methods.

6.  Go to login component and add the following line of code:
router is commented as it has its own ssample code. Please refer my angular-routing sample and enable based on that

```
      // import { Router } from '@angular/router';
    import { AuthService } from './../_services/auth.service';
    import { Component, OnInit, Output, EventEmitter } from '@angular/core';

    @Component({
      selector: 'app-login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.css']
    })
    export class LoginComponent implements OnInit {
    model: any = {};
    @Output() userLoggedIn =  new EventEmitter ();
      constructor(private authService: AuthService
        // , private router: Router
        ) { }

      ngOnInit() {
      }
    login() {
      this.authService.login(this.model).subscribe(next => {
        console.log(next);
        }, error => {
      console.log('there is error');
      }, () => {
        // redirect to the landing page as follows
        //this.router.navigate(['/home']);
      } );
    }

    loggedIn() {
      const token = localStorage.getItem('token');
      return !!token;
    }
    logout() {
      const token = localStorage.removeItem('token');
      //this.router.navigate(['/logout']);
      console.log('logged out');
    }


    }
```

    }

7. Open login.component.css and add the following lines of css code:
```
  input[type=textarea] {
    width: 100%;
    height: 64px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
  .shadoweddiv{
  border: 1px solid;
  padding:10px;
  box-shadow: 5px 10px 18px #888888;
  border-color: antiquewhite;
  margin-top: 10px;
  height: 100%;
  }
```
8. Install bootstrap and bootswatch using the following line of commands:

```
  npm install bootstrap
  npm install bootswatch

```

9.  Open styles.css and add the following line of code:
```
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  @import '../node_modules/bootswatch/dist/journal/bootstrap.min.css';
```  
10.

### Build and run the  Application

    1. Run sample app using  **ng serve** command from terminal window 

<a name=sample-details></a>

## Sample details

This sample application shows how to create angular login and registration application..

<a name=disclaimers></a>

## Disclaimers
The code included in this sample is not intended demonstrate some general guidance and architectural patterns for web development. It contains minimal code required to create login and register framework, and it uses some repository pattern. S 
You can easily modify this code to fit the architecture of your application.

<a name=related-links></a>


## Code of Conduct
This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). 



## Questions
Email questions to: [yadugna@gmail.com](mailto: yadugna@gmail.com).
