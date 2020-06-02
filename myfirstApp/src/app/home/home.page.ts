import { Component } from '@angular/core';

interface IProducto {
  nombreProd: string,
  descProd: string,
  cateProd: string,
  precioProd: number,
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  arrayProductos : Array<IProducto> = [];
  producto: IProducto = {
    nombreProd: "",
    descProd: "",
    cateProd: "",
    precioProd: 0,
  };

  uploadproduct(product: IProducto){
      this.arrayProductos.push(product)
      alert(product.nombreProd+" se ha insertado correctamente")
  }
}
