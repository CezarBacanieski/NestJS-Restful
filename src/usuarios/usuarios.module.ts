import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosRepository } from './usuarios.repository';
import { EmailUnicoValidator } from './validation/email-unico.validator';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosRepository, EmailUnicoValidator],
})
export class UsuariosModule {}
