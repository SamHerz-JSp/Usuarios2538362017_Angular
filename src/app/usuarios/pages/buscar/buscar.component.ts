import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  usuarios: any = [];
  constructor(private UsuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.buscar();
  }

  buscar()
  {
    this.UsuarioService.buscarUsuarios()
    .subscribe((usuario) => {
      console.log(usuario);
      this.usuarios = usuario.usuarios;
      //console.log(usuario[0].nombre);
    }, (err)=> {
      console.log('hay error');
    })
  }

}
