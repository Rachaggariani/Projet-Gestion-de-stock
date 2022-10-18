// import { Injectable } from '@angular/core';
// // import { UserService } from './user.service';
// // import { BehaviorSubject, tap } from 'rxjs';
// import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Observable} from 'rxjs';
// const AUTH_API='';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   constructor(private http: HttpClient){}
//   login(username: string, password: string): Observable<any> {
//     return this.http.post(
//       AUTH_API + 'signin',
//       {
//         username,
//         password,
//       },
//       httpOptions
//     );
//   }
//   register(username: string, email: string, password: string): Observable<any> {
//     return this.http.post(
//       AUTH_API + 'signup',
//       {
//         username,
//         email,
//         password,
//       },
//       httpOptions
//     );
//   }
// private _isLoggedIn$=new BehaviorSubject<boolean>(false);
// isLoggedIn$=this._isLoggedIn$.asObservable();
//   constructor(private userService:UserService) { 
//     const token=localStorage.getItem('profile_auth');
//     this._isLoggedIn$.next(!!token);
//   }
//   login(username:string,password:string){
//    return  this.userService.login(username ,password).pipe(tap((response:any)=>{
//     localStorage.setItem('profile_auth',response.token);
//     this._isLoggedIn$.next(true);
//     console.log(response.token);
//    }));

//   }
//}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:4001/api';
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user:any) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signInUser(user:any) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/connecter']);
  }

}
