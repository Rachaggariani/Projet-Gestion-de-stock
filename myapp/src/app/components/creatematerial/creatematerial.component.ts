import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Material } from 'src/app/models/material';
import { ToastrService } from 'ngx-toastr';
import { MaterialService } from 'src/app/services/material.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-creatematerial',
  templateUrl: './creatematerial.component.html',
  styleUrls: ['./creatematerial.component.css']
})
export class CreatematerialComponent implements OnInit {
  MaterialForm:FormGroup;
  titre='Create Material';
  id: string | null;
  constructor(private fb:FormBuilder, private router:Router,private toastr: ToastrService, private aRouter: ActivatedRoute,private materialService:MaterialService) { 
  
    this.MaterialForm=this.fb.group({
      Types:['',Validators.required],
      NameMaterial:['',Validators.required],
      quantity:['',Validators.required],
      price:['',Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }
  aggregatematerial(){
    
    const mt:Material={
      Types:this.MaterialForm.get('Types')?.value,
      NameMaterial:this.MaterialForm.get('NameMaterial')?.value,
      quantity:this.MaterialForm.get('quantity')?.value,
      price:this.MaterialForm.get('price')?.value,
    }
    console.log(mt);
if(this.id!==null){
this.materialService.editmaterial(this.id,mt).subscribe(data=>{
  this.toastr.info('Material is registred !', 'Material is registred');
  this.router.navigate(['/']);
},error=>{
  console.log(error);
    this.MaterialForm.reset();
})
}
else{
  this.materialService.createMaterial(mt).subscribe(data => {
  this.toastr.success('Existed Material !', 'Existed Material');
  this.router.navigate(['/']);
    },error=>{
      console.log(error);
        this.MaterialForm.reset();
   })}
  }
  Edit(){
    if(this.id!==null){
      this.titre='Update Material';
      this.materialService.obtenirMaterial(this.id).subscribe(data=>{
        this.MaterialForm.setValue({
          Types:data.Types,
          NameMaterial:data.NameMaterial,
          quantity:data.quantity,
          price:data.price
        })
      })
    }
    }
}
