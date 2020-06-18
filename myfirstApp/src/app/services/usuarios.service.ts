import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class UsuariosService {

  constructor(private _db: AngularFireDatabase){

  }

  getUsuarios(): firebase.database.Reference{
    //return this.productos;
    let ref=this._db.database.ref("usuarios");
    return ref;
}
}

