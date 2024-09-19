/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosRepository } from './usuarios.repository';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { ListaUsuarioDTO } from './dto/lista-usuario.dto';

@Controller('/usuarios')
export class UsuariosController {
  constructor(private usuarioResitory: UsuariosRepository) {}

  @Post()
  async criaUsuario(@Body() dadosUsuario: CreateUsuarioDto) {
    this.usuarioResitory.salvar(dadosUsuario);
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
