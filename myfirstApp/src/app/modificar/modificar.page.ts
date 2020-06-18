import { Component } from '@angular/core';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from "../services/usuarios.service";
import { IUsuario } from '../interfaces';

@Component({
  selector: 'app-modificar',
  templateUrl: 'modificar.page.html',
  styleUrls: ['modificar.page.scss'],
})

export class ModificarPage {

  key: string;
  producto: object = {};

  constructor(private _productoService: ProductoService, private _activatedRoute: ActivatedRoute, private _ususervice: UsuariosService, private router: Router) {
  }

  ngOnInit() {
    this.key = this._activatedRoute.snapshot.paramMap.get('key');
    console.log("he recibido un "+this.key);

    let ref = this._productoService.getProductos().orderByKey().equalTo(this.key);
    
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        this.producto = child.val();
      })
    })  
    console.log(this.producto);
  }

  modificar() {
    this._productoService.modifyProducto(this.producto, this.key);
  }

  eliminar() {
    this._productoService.deleteproducto(this.key);
  }

  /*insertarProducto() {

    let producto: (IProducto | IMotor | IInmobiliaria | ITecnologia);

    if (this.cateProd === "Motor") {
      producto = {
        "id": this.productos.length + 1,
        "nombreProd": this.nombreProd,
        "descProd": this.descProd,
        "cateProd": this.cateProd,
        "precioProd": this.precioProd,
        "tipoVehiculo": this.tipoVehiculo,
        "kilometrosVehiculo": this.kilometrosVehiculo,
        "anyoVehiculo": this.anyoVehiculo,
        "key": " ",
        "propietario": this.correo
      };
    }
    else if (this.cateProd === "Inmobiliaria") {
      producto = {
        "id": this.productos.length + 1,
        "nombreProd": this.nombreProd,
        "descProd": this.descProd,
        "cateProd": this.cateProd,
        "precioProd": this.precioProd,
        "metrosCuadrados": this.metrosCuadrados,
        "numBanyos": this.numBanyos,
        "numHabitaciones": this.numHabitaciones,
        "localidad": this.localidad,
        "key": " ",
        "propietario": this.correo
      };
    }
    else if (this.cateProd === "Tecnologia") {
      producto = {
        "id": this.productos.length + 1,
        "nombreProd": this.nombreProd,
        "descProd": this.descProd,
        "cateProd": this.cateProd,
        "precioProd": this.precioProd,
        "estadoProducto": this.estadoProducto,
        "key": " ",
        "propietario": this.correo
      };
    }
    else if (this.cateProd === "Hogar") {
      /*this.productos.push*/
      /*producto = {
        "id": this.productos.length + 1,
        "nombreProd": this.nombreProd,
        "descProd": this.descProd,
        "cateProd": this.cateProd,
        "precioProd": this.precioProd,
        "key": " ",
        "propietario": this.correo
      };
    }
    else {
      alert("Selecciona una categoria")
    }
    delete producto.key;
    this._productoService.setProducto(producto);
  }*/

  //=============================================//

}
