import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validation/email-unico.validator';

export class UpdateUsuarioDto {
  @IsNotEmpty({ message: 'O nome deve ser passado' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'o email deve conter @' })
  @EmailEhUnico({ message: 'Ja esxite um usuario com esse email' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'a senha deve ter pelo menos 6 caracteres' })
  @IsOptional()
  senha: string;
}
