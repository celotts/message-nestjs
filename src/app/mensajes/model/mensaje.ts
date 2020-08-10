import { IMensaje } from '../interface/mensaje';
export class Mensaje {
  mensaje: IMensaje;

  constructor(mensajeApi: IMensaje) {
    this.mensaje.id = mensajeApi.id || null;
    this.mensaje.nick = mensajeApi.nick || '';
    this.mensaje.mensaje = mensajeApi.mensaje || '';
  }
}
