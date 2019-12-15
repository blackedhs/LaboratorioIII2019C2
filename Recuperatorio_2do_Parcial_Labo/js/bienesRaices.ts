class bienesRaices{
    protected id:any;
    protected titulo:string;
    protected transaccion:ITransaccion;
    protected descripcion:string;
    protected precio:string;
    protected baños:number;
    protected cocheras:number;
    protected habitaciones:number;
    constructor(id:any,titulo:string,transaccion:string,descripcion:string,precio:string,baños:number,cocheras:number,habitaciones:number){
        this.id = id;
        this.titulo = titulo;
        if(transaccion=='Venta' || transaccion=='venta' || transaccion=='0')
            this.transaccion= ITransaccion['Venta'];
        else
            this.transaccion=ITransaccion['Alquiler'];
        this.descripcion=descripcion;
        this.precio = precio;
        this.baños = baños;
        this.cocheras = cocheras;
        this.habitaciones = habitaciones;
    }
    set Id(e:any){this.id=e;}
    get Id():any{return this.id;}
    set Titulo(e:string){this.Titulo=e;}
    get Titulo():string{return this.titulo;}
    set Transaccion(e:string){
        if(e=='Venta' || e=='venta' )
            this.transaccion= ITransaccion['Venta'];
        else
            this.transaccion=ITransaccion['Alquiler'];
    }
    get Transaccion():string{
        if (this.transaccion == ITransaccion['Venta'] || this.transaccion == 0)
            return 'Venta';
        else
            return'Alquiler';
    }
    set Precio(e:string){this.precio=e;}
    get Precio():string{return this.precio;}
    set Descripcion(e:string){this.descripcion=e;}
    get Descripcion():string{return this.descripcion;}
    set Baños(e:number){this.baños=e;}
    get Baños():number{return this.baños}
    set Autos(e:number){this.cocheras=e;}
    get Autos():number{return this.cocheras;}
    set Dormis(e:number){this.habitaciones=e;}
    get Dormis():number{return this.habitaciones;}

}
enum ITransaccion{
    Venta,
    Alquiler
}