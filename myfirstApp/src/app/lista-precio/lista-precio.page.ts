import { Component, OnInit } from '@angular/core';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from "../services/usuarios.service";
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-lista-precio',
  templateUrl: './lista-precio.page.html',
  styleUrls: ['./lista-precio.page.scss'],
})
export class ListaPrecioPage implements OnInit {
  productos: (IProducto | IMotor | IInmobiliaria | ITecnologia)[] = [];
  correo: string;
  dinero: number;

  constructor(private _productoService : ProductoService,private _activatedRoute: ActivatedRoute, private _db : AngularFireDatabase) { }

  ngOnInit() {
    this.correo = this._activatedRoute.snapshot.paramMap.get("correo");
  }
  cargarProducto2(){

    this.productos = []

    let ref = this._productoService.getProductos().orderByChild("propietario").equalTo(this.correo);
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        value.key=child.key;
        if(this.dinero <= value.precioProd){
          this.productos.push(value);
        }
      })
    })
  }
}
