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

  private buscaPorId(id: string) {
    const possivelUsuario = this.usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      throw new Error('Usuario nao encontrado');
    }

    return possivelUsuario;
  }

  async update(id: string, dadosDeAtualizacao: Partial<UsuariosEntity>) {
    const usuario = this.buscaPorId(id);
    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      usuario[chave] = valor;
    });

    return usuario;
  }

  async delete(id: string) {
    const usuario = this.buscaPorId(id);

    this.usuarios = this.usuarios.filter(
      (usuarioSalvo) => usuarioSalvo.id !== id,
    );

    return usuario;
  }
}
