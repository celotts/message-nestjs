import { Injectable } from '@angular/core';
import { Mensaje } from './model/mensaje';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  private headers: any;
  private headersCsv: any;
  private headersJson: any;

  constructor(private http: HttpClient) {
    /*---------------------------------------------------*/
    // Define cabezara del servicio
    // Tipo: Json
    /*---------------------------------------------------*/
    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.headersCsv = new HttpHeaders({
      'Content-Type': 'text/csv'
    });
    this.headersJson = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getAllMensaje = () => {
    try {
      return this.http.get<any>(`${environment.urlBaseDato}${environment.service.getallMessage.endpoint}`, this.headers)
        .pipe(
          catchError(err => {
            return throwError(`${MENSAJE_APP.errorInterno}`);
          }),
          map(result => {
            switch (result['codigo']) {
              case 1: {
                if (result['data'].length > 0) {
                  return result;
                } else {
                  this.validaSiHayCategoria(result);
                }
                break;
              }
              default: {
                this.errorService.getErrorService(result, codigoError);
              }
            }
          })
        );
    } catch {
      this.errorService.getErrorService({ 'codigo': 3, 'mensaje': MENSAJE_APP.errorInterno }, 'ABB-405');
    }
  }
}
