import { Component } from '@angular/core';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-insertar',
  templateUrl: 'insertar.page.html',
  styleUrls: ['insertar.page.scss'],
})

export class InsertarPage {
   oculto1 : boolean = false;
   oculto2 : boolean = false;
   oculto3 : boolean = false;
   width : number = 200;

   

  constructor(private _productoService : ProductoService) {
  }

  ngOnInit(){
    //this.productos = this._productoService.getProductos();
  }

  nombreProd: string;
  descProd: string;
  cateProd: string = ""
  precioProd: number;

  tipoVehiculo: string;
  kilometrosVehiculo: number;
  anyoVehiculo: number;

  metrosCuadrados: number;
  numBanyos: number;
  numHabitaciones: number;
  localidad: string;

  estadoProducto: string;

  productos: (IProducto | IMotor | IInmobiliaria | ITecnologia)[] = [];


  cambiar_Oculto() : void {
    this.oculto1 = false;
    this.oculto2 = false;
    this.oculto3 = false;
  }

  cambiar_Oculto1() : void{
    this.oculto1 = true;
    this.oculto2 = false;
    this.oculto3 = false;
  }

  cambiar_Oculto2() : void{
    this.oculto1 = false;
    this.oculto2 = true;
    this.oculto3 = false;
  }

  cambiar_Oculto3() : void{
    this.oculto1 = false;
    this.oculto2 = false;
    this.oculto3 = true;
  }

  insertarProducto(){

    let producto: (IProducto | IMotor | IInmobiliaria | ITecnologia);

    if(this.cateProd === "Motor"){
      producto = {
        "id": this.productos.length + 1,
        "nombreProd": this.nombreProd,
        "descProd": this.descProd,
        "cateProd": this.cateProd,
        "precioProd": this.precioProd,
        "tipoVehiculo": this.tipoVehiculo,
        "kilometrosVehiculo": this.kilometrosVehiculo,
        "anyoVehiculo": this.anyoVehiculo,
        "key": " "
      };
    } 
    else if(this.cateProd === "Inmobiliaria"){
      producto={
        "id": this.productos.length + 1,
        "nombreProd": this.nombreProd,
        "descProd": this.descProd,
        "cateProd": this.cateProd,
        "precioProd": this.precioProd,
        "metrosCuadrados": this.metrosCuadrados,
        "numBanyos": this.numBanyos,
        "numHabitaciones": this.numHabitaciones,
        "localidad": this.localidad,
        "key": " "
      };
    }
    else if(this.cateProd === "Tecnologia"){
      producto={
        "id": this.productos.length + 1,
        "nombreProd": this.nombreProd,
        "descProd": this.descProd,
        "cateProd": this.cateProd,
        "precioProd": this.precioProd,
        "estadoProducto": this.estadoProducto,
        "key": " "
      };
    }
    else if(this.cateProd === "Hogar"){
      /*this.productos.push*/
      producto={
        "id": this.productos.length + 1,
        "nombreProd": this.nombreProd,
        "descProd": this.descProd,
        "cateProd": this.cateProd,
        "precioProd": this.precioProd,
        "key": " "
      };
    }
    else{
      alert("Selecciona una categoria")
    }
    delete producto.key;
    this._productoService.setProducto(producto);
  }

  //=============================================//
  
}
