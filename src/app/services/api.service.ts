import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

import { Producto} from '../models/producto';
import { Observable, of } from  'rxjs';
import { delay, catchError } from "rxjs/operators";
import { EnvService } from './utils/env.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient, private env: EnvService) { }

  //metodo para recuperar todos los productos
  leerProductos(): Observable<any>{
    const url = `${this.env.apiGatewayBackOffice}producto/listar-productos`;
    return this.http.get(url)
      .pipe(
        delay(1500)
      );
  }

  //metodo para recuperar todos los productos
  leerUnProducto(id: number): Observable<any>{
    const url = `${this.env.apiGatewayBackOffice}producto/obtener-producto/${id}`;
    return this.http.get(url);
  }


  //metodo para crear un producto
  crearProducto(producto: Producto): Observable<any>{

    const url =  `${this.env.apiGatewayBackOffice}producto/crear-producto/`;
    return this.http.post(url, producto)
    .pipe(
      delay(500),
      catchError(err => of( err.error))
    );;
  }

  //metodo para actualizar un producto
  actualizarProducto(producto: Producto){
    console.log('datos actualizar', producto)
    const url = `${this.env.apiGatewayBackOffice}producto/actualizar-producto`;
    return this.http.put<Producto>(url, producto);
  }

  //metodo para eliminar un producto
  eliminarProducto(id: string){
    const url = `${this.env.apiGatewayBackOffice}producto/eliminar-producto/${id}`;
    return this.http.delete(url);
  }
}
