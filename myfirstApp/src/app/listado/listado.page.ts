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
  productos: (IProducto | IMotor | IInmobiliaria | ITecnologia)[] = [];

  constructor(private _productoService : ProductoService) {
  }

  ngOnInit(){
    let ref = this._productoService.getProductos();
    
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        value.key=child.key;
        this.productos.push(value);
        console.log("objeto: " + child.val().nombreProd);
      })
    })
  }

}
