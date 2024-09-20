/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuariosRepository } from './usuarios.repository';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { v4 as uuid } from 'uuid';
import { UsuariosEntity } from './usuarios.entity';
import { ListaUsuarioDTO } from './dto/lista-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto ';

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
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome),
    );

    return usuariosLista;
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: UpdateUsuarioDto,
  ) {
    const usuarioAtualizado = await this.usuarioResitory.update(id, novosDados);

    return {
      usuario: usuarioAtualizado,
      message: 'Usuario atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioDeletado = await this.usuarioResitory.delete(id);
    
    return {
      usuario: usuarioDeletado,
      message: 'Usuario deletado com sucesso',
    };
  }
}
