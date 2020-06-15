import { Component } from '@angular/core';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private _productoService : ProductoService) {
  }

  ngOnInit(){
    //this.productos = this._productoService.getProductos();
  }

  //=============================================//
  
}
