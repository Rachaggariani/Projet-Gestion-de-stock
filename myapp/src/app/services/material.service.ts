import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../models/material';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {
Url="http://localhost:4001/api/materials/";
  constructor(private http: HttpClient) { }
  getmt():Observable<any>{
    return this.http.get(this.Url);
   }
   delMaterial(id:string): Observable<any>{
 return this.http.delete(this.Url+id);
   }
   createMaterial(material:Material): Observable<any>{
 return this.http.post(this.Url,material);
   }
   obtenirMaterial(id: string):Observable<any>{
 return this.http.get(this.Url+id);
   }
   editmaterial(id:string,material:Material): Observable<any>{
     return this.http.put(this.Url+ id, material);
   }
 
   
}
