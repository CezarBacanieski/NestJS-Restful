/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosRepository } from './usuarios.repository';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('/usuarios')
export class UsuariosController {
  constructor(private usuarioResitory: UsuariosRepository) {}

  @Post()
  async criaUsuario(@Body() dadosUsuario: CreateUsuarioDto) {
    const usuariosEntity = new UsuariosEntity();
    usuariosEntity.email = dadosUsuario.email;
    usuariosEntity.nome = dadosUsuario.nome;
    usuariosEntity.senha = dadosUsuario.senha;
    usuariosEntity.id = uuid();

    this.usuarioResitory.salvar([usuariosEntity]);
    return { id: usuariosEntity.id, message: 'Usuario criado com sucesso' };
  }

  @Get()
  async listaUsuarios() {
    const usuariosSalvo = await this.usuarioResitory.listaUsuarios();
    const usuariosLista = usuariosSalvo.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.name),
    );

    return usuariosLista;
  }
}
