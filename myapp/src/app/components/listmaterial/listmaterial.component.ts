import { Component, OnInit, ViewChild } from '@angular/core';
import { Material } from 'src/app/models/material';
import { MaterialService } from 'src/app/services/material.service';
import { ToastrService } from 'ngx-toastr';
 import{MatSidenav} from '@angular/material/sidenav';
 import{BreakpointObserver} from'@angular/cdk/layout';
 import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  selector: 'app-listmaterial',
  templateUrl: './listmaterial.component.html',
  styleUrls: ['./listmaterial.component.css']
 
})
export class ListmaterialComponent implements OnInit {

   @ViewChild(MatSidenav) sidenav!:MatSidenav;
  listMt:Material[]=[];
sideBarOpen=false;
  constructor(private observer: BreakpointObserver, private authService:AuthService, private materialService: MaterialService,private toast:ToastrService) {
   }
ngAfterViewInit(){
  this.observer.observe(['(max-width:1600px)']).subscribe((res)=>{
    if(res.matches){
      this.sidenav.mode='over';
      this.sidenav.close();
    } else {
      this.sidenav.mode='side';
      this.sidenav.open();
    }
  });
}

  ngOnInit(): void {

    this.obtenirMaterials();
  
  }
  obtenirMaterials(){
    this.materialService.getmt().subscribe(data=>{
      this.listMt=data.materials;
      console.log("listM==> ", this.listMt);
      
      },error=>{
        console.log(error);
      })
  }
  delMaterial(id: any){
    console.log('message '+id);
  
    this.materialService.delMaterial(id).subscribe(data=>{
    this.toast.error('eliminer Material','Material eliminated');
    this.obtenirMaterials();
    },error=>{
      console.log(error);
    })
    }

  }
