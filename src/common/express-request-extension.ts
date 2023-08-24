// express-request-extension.ts
import { Request } from 'express'; // Assurez-vous que 'express' est correctement installé dans votre projet
import { UserEntity } from './entities/user';

declare module 'express' {
  interface Request {
    user?: UserEntity; // Remplacez 'any' par le type de votre objet utilisateur
  }
}