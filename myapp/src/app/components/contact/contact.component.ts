import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { FormGroup,Validators,FormBuilder,FormControl} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  token: string|undefined;
  // cptch: FormGroup;private formBuilder: FormBuilder
  constructor() {  this.token = undefined;
    // this.cptch = this.formBuilder.group({
    //   recaptcha: ['', Validators.required]
    // });
   }

  ngOnInit(): void {
    
  }
  // sitekey:string="6LdZwMohAAAAALWC2jsV_80v0PBuEY3pngxdJea0";
  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }

  }
