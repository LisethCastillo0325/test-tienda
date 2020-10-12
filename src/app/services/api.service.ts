import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Producto} from '../models/producto';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //direccion local del backend
  PHP_API_SERVER = "http://127.0.0.1";

  constructor(private http: HttpClient) { }

  //metodo para recuperar todos los productos
  leerProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.PHP_API_SERVER}/api/index.php`)
      .pipe(
        delay(1500)
      );
  }

  //metodo para recuperar todos los productos
  leerUnProducto(id: number): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.PHP_API_SERVER}/api/index.php/?id=${id}`);
  }


  //metodo para crear un producto
  crearProducto(policy: Producto): Observable<Producto>{
    return this.http.post<Producto>(`${this.PHP_API_SERVER}/api/index.php`, policy);
  }

  //metodo para actualizar un producto
  actualizarProducto(policy: Producto){
    console.log('datos actualizar', policy)
    return this.http.post<Producto>(`${this.PHP_API_SERVER}/api/index.php`, policy);
  }

  //metodo para eliminar un producto
  eliminarProducto(policy: Producto){
    return this.http.post<Producto>(`${this.PHP_API_SERVER}/api/index.php`, policy);
  }
}
