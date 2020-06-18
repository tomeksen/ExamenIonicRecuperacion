import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces';
import { IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class ProductoService{
    /*
    AEV10
    productos: (IProducto | IMotor | IInmobiliaria | ITecnologia)[] = [
        {
          "id" : 1,
          "nombreProd": "Peugeot 208",
          "descProd": "Se vende duerme siempre en garaje",
          "cateProd": "Motor",
          "precioProd": 9500,
          "tipoVehiculo": "Coche",
          "kilometrosVehiculo": 100000,
          "anyoVehiculo": 2018
        },
        {
          "id" : 2,
          "nombreProd": "Casoplon",
          "descProd": "Se vende duerme siempre en garaje",
          "cateProd": "Inmobiliaria",
          "precioProd": 9500,
          "metrosCuadrados": 110,
          "numBanyos": 2,
          "numHabitaciones": 3,
          "localidad": "Valencia"
        },
        {
          "id" : 3,
          "nombreProd": "Xiaomi",
          "descProd": "Mejor telefono relación calidad-precio del mercado",
          "cateProd": "Tecnologia",
          "precioProd": 150,
          "estadoProducto": "Perfecto estado"
        }
      ]*/

    getProductos(): firebase.database.Reference{
        //return this.productos;
        let ref=this._db.database.ref("productos");
        return ref;
    }

    /*getProducto(id : number) : (IProducto | IMotor | IInmobiliaria | ITecnologia){
        //return this.productos.find(x => x.id == id);

    }*/

    constructor(private _db: AngularFireDatabase){

    }

    setProducto(producto: IProducto | IMotor | IInmobiliaria | ITecnologia){
      let ref=this._db.database.ref("productos");
      let res = ref.push(producto);   
      console.log("he insertado "+res.key);  
    }

    deleteproducto(key: string){
      let ref=this._db.database.ref("productos");
      ref.child(key).remove();
    }

    modifyProducto(producto : object, key : string) {
      let ref=this._db.database.ref("productos");
      ref.child(key).set(producto);
    }
}