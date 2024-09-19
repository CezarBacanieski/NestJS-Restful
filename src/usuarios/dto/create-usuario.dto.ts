import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validation/email-unico.validator';

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'O nome deve ser passado' })
  nome: string;

  @IsEmail(undefined, { message: 'o email deve conter @' })
  @EmailEhUnico({ message: 'Ja esxite um usuario com esse email' })
  email: string;

  @MinLength(6, { message: 'a senha deve ter pelo menos 6 caracteres' })
  senha: string;
}
