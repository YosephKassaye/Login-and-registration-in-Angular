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

