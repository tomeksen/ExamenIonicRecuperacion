import { Component } from '@angular/core';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  correo : string;

  constructor(private _productoService : ProductoService, private _activatedRoute : ActivatedRoute, private router : Router) {
  }

  ngOnInit(){
    //this.productos = this._productoService.getProductos();
    this.correo = this._activatedRoute.snapshot.paramMap.get("correo");
  }

  addProducto() {
    const url = `/insertar/${this.correo}`;
    this.router.navigateByUrl(url);
  }

  misProductos() {
    const url = `/misproductos/${this.correo}`;
    this.router.navigateByUrl(url);
  }
  listaprecio(){
    let url = `/listaprecio/${this.correo}`;
    this.router.navigateByUrl(url)
  }
  //=============================================//
  
}
