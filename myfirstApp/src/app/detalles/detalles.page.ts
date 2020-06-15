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

  key : string;
  producto : object={};
  //productos : (IProducto | IMotor | IInmobiliaria | ITecnologia)[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private _productoService : ProductoService) { }

  ngOnInit() {
    this.key = this._activatedRoute.snapshot.paramMap.get('key');
    console.log("he recibido un "+this.key);
    //this.producto = this._productoService.getProducto(this.id);
    
    //console.log("Nombre: " + this.productos.nombreProd);

    //let ref = this._productoService.getProductos();

    let ref = this._productoService.getProductos().orderByKey().equalTo(this.key);
    
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        this.producto=child.val();
      })
    })
  }

}
