export class Material{
    _id?:number;
    Types:string;
    NameMaterial:string;
    quantity:number;
    price:number;
    constructor(Types:string,NameMaterial:string,quantity:number,price:number){
 this.Types=Types;
 this.NameMaterial=NameMaterial;
 this.quantity=quantity;
 this.price=price;
    }
}