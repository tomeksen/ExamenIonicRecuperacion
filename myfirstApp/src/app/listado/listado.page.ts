import { Component, OnInit } from '@angular/core';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  id : number;
  productos: (IProducto | IMotor | IInmobiliaria | ITecnologia)[];

  constructor(private _productoService : ProductoService) {
  }

  ngOnInit(){
    this.productos = this._productoService.getProductos();
  }

}
