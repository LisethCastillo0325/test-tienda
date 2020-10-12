import { Component, OnInit } from '@angular/core';

import { ApiService} from '../../services/api.service';
import {Producto} from "../../models/producto";

import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  cargando = false;

  productos:  Producto[];

  constructor( private apiService: ApiService) { }

  ngOnInit() {

    this.cargando = true;

    this.apiService.leerProductos().subscribe((productos: Producto[])=>{
      this.productos = productos;
      this.cargando = false;

      console.log(this.productos);
    })
  }


  eliminarProducto(producto, i:number){


    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ producto.nombre }`,
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {

        this.productos.splice(i, 1);
        producto.accion = "eliminar";
        this.apiService.eliminarProducto(producto).subscribe((producto: Producto)=>{
          console.log("eliminado, ", producto);
        });
      }

    });


  }

}
