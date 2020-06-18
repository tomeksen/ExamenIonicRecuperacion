import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../services/usuarios.service";
import { IUsuario } from '../interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  correo: string;
  usuarios: IUsuario[] = [];

  constructor(private _ususervice: UsuariosService, private router : Router) { }

  ngOnInit() {
    let ref = this._ususervice.getUsuarios();

    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.usuarios.push(value);
        console.log("objeto: " + child.val().correo);
      })
    })
  }

  comprobarUsuario() {
    for(var i = 0; i < this.usuarios.length; i++){
      if(this.correo === this.usuarios[i].correo) {
        console.log("Correcto");
        const url = `/home/${this.correo}`;
        this.router.navigateByUrl(url);
        return;
      }
    }
    console.log("Error");
  }
}

