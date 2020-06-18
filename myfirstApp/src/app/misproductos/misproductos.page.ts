import { Component, OnInit } from '@angular/core';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from "../services/usuarios.service";

@Component({
  selector: 'app-misproductos',
  templateUrl: './misproductos.page.html',
  styleUrls: ['./misproductos.page.scss'],
})
export class MisproductosPage implements OnInit {

  id : number;
  productos: (IProducto | IMotor | IInmobiliaria | ITecnologia)[] = [];

  correo: string;
  
  cateProd: string = "";

  constructor(private _productoService : ProductoService, private _activatedRoute: ActivatedRoute, private _ususervice: UsuariosService, private router: Router) {
  }

  ngOnInit(){
    this.correo = this._activatedRoute.snapshot.paramMap.get("correo");
    let ref = this._productoService.getProductos().orderByChild("propietario").equalTo(this.correo);
    
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        value.key=child.key;
        this.productos.push(value);
      })
    })   
  }

  cargarProducto(){

    this.productos = []

    let ref = this._productoService.getProductos().orderByChild("propietario").equalTo(this.correo);
    
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        value.key=child.key;
        if(this.cateProd === value.cateProd || this.cateProd === "Todos"){
          this.productos.push(value);
        }
      })
    })
  }

}
