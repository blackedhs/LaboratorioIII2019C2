/// <reference path="bienesRaices.ts" />
class Anuncio extends bienesRaices{
    constructor(id:any,titulo:string,transaccion:string,descripcion:string,precio:string,baños:number,cocheras:number,habitaciones:number){
        super(id,titulo,transaccion,descripcion,precio,baños,cocheras,habitaciones)
    }
}