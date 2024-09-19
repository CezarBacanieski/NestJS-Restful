import { Injectable } from '@nestjs/common';
import { UsuariosEntity } from './usuarios.entity';
@Injectable()
export class UsuariosRepository {
  private usuarios: UsuariosEntity[] = [];

  async salvar(usuario: UsuariosEntity[]) {
    this.usuarios.push(...usuario);
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
