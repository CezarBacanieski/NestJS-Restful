import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosRepository } from './usuarios.repository';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('/usuarios')
export class UsuariosController {
  constructor(private usuarioResitory: UsuariosRepository) {}

  @Post()
  async criaUsuario(@Body() dadosUsuario: CreateUsuarioDto) {
    this.usuarioResitory.salvar(dadosUsuario);
  }

  @Get()
  async listaUsuarios() {
    return this.usuarioResitory.listaUsuarios();
  }
}
