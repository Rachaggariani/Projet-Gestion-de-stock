import { Component, OnInit } from '@angular/core';
//import { Form, FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// import { UserService } from 'src/app/user.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent implements OnInit {
  user = {};
  form: any = {
    username: null,
    password: null
  };
  signUpform: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  errorMessageSignup='';
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  // registerform=new FormGroup({
  //   username:new FormControl(null,Validators.required),
  //   password:new FormControl(null,Validators.required),
  // });
// registerForm:FormGroup=new FormGroup({
//   email:new FormControl(null,[Validators.email,Validators.required]),
//   name:new FormControl(null,Validators.required),
//   password:new FormControl(null,Validators.required),
// })
// SignInForm:FormGroup=new FormGroup({
// email:new FormControl(null,[Validators.email,Validators.required]),
// password:new FormControl(null,Validators.required)
// });
  constructor(private router:Router,private authService:AuthService,private storageService:StorageService) { }
// submitForm(){
//   if(this.registerform.invalid){
// return;
//   }
//   this.AuthService.login(this.registerform.get('username')?.value, this.registerform.get('password')?.value).subscribe((response)=>{
//     this.router.navigate(['/']);
//   })
// }
  ngOnInit(): void {}
    // if (this.storageService.isLoggedIn()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }
  
  // Register(){
  //   if(!this.registerForm.valid){
  //     console.log('Invalid Form ');
  //     return ;
  //   }
  //   this.userService.Register(JSON.stringify(this.registerForm.value)).subscribe(data=>{
  //     console.log(data);},
  //     error=>console.log(error))
  //   // console.log(JSON.stringify(this.registerForm.value));
  // }
  // LOGIN(){
  //   if(!this.SignInForm.valid){
  //     console.log('Invalid');
  //     return;

  //   }
  //   console.log(JSON.stringify(this.SignInForm.value));
  // }
  Submit() {
    //const { username, email, password } = this.user;
    // this.authService.signUpUser(this.signUpform).subscribe({
    //   next: data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   error: err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // });
    this.authService.signUpUser(this.signUpform)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }
  onSubmit(): void { 
    //const { username, password } = this.form;

    // this.authService.signInUser(this.form).subscribe({
    //   next: data => {
    //     this.storageService.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.storageService.getUser().roles;
    //     this.reloadPage();
    //   },
    //   error: err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // });

    this.authService.signInUser(this.form)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )

  }
  reloadPage(): void {
    window.location.reload();
  }
}
