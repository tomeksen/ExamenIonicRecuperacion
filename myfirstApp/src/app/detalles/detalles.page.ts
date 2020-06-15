import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id : number;
  producto : (IProducto | IMotor | IInmobiliaria | ITecnologia);

  constructor(private _activatedRoute: ActivatedRoute, private _productoService : ProductoService) { }

  ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    console.log("he recibido un "+this.id);
    this.producto = this._productoService.getProducto(this.id);
    
    console.log("Nombre: " + this.producto.nombreProd);
  }

}
