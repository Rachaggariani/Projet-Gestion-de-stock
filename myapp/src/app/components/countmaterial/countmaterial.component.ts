import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/models/material';
import { MaterialService } from 'src/app/services/material.service';
import { ActivatedRoute,Router } from '@angular/router';
import { number } from 'prop-types';
@Component({
  selector: 'app-countmaterial',
  templateUrl: './countmaterial.component.html',
  styleUrls: ['./countmaterial.component.css']
})
export class CountmaterialComponent implements OnInit {
  listMt:Material[]=[];
  detailM:any;
  id:any;
  constructor( private router:Router,private materialService: MaterialService,private activatedRoute:ActivatedRoute) { }
public compter:number=1;
initailValue : any;
 public countp():void{
  this.compter=this.compter+1;
  this.detailM.price = this.initailValue * this.compter;
}
public countm():void{
  this.compter=this.compter-1>1?this.compter-1:1;
  // this.detailM.price = this.detailM.price * this.compter;
  this.detailM.price = this.initailValue * this.compter;
}
  ngOnInit(): void {
    //this.obtenirMaterials();
    //let id = this.router.snapshot.paramMap.get('id');
    let id = this.router.url.substring(this.router.url.indexOf('/') + 17);
    console.log('id '+id);
    // let idNumber = Number(id);
    // console.log('idNumber '+idNumber);
    this.obtenirMaterials(id);
  }

  obtenirMaterials(id : String){
    this.materialService.getmt().subscribe(data=>{
      this.listMt=data.materials;

      this.listMt.forEach(listM=> {
        if (listM._id){
          if (listM._id.toString() == id){
            this.detailM = listM;
            this.initailValue = this.detailM.price;
          }
        }
      });
    },error=>{
      console.log(error);
    })
  }

  }



