import { Injectable } from '@nestjs/common';
@Injectable()
export class UsuariosRepository {
  private usuarios = [];

  async salvar(usuario) {
    this.usuarios.push(usuario);
    console.log(this.usuarios);
  }

  async listaUsuarios() {
    return this.usuarios;
  }

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }
}
