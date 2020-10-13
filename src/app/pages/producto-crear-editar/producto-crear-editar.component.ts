import { Component, OnInit } from '@angular/core';
import { Producto } from "../../models/producto";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";

import Swal from 'sweetalert2';


@Component({
  selector: 'app-producto-crear-editar',
  templateUrl: './producto-crear-editar.component.html',
  styleUrls: ['./producto-crear-editar.component.css']
})
export class ProductoCrearEditarComponent implements OnInit {


  //producto = new Producto();

  productos:  Producto[];
  ProductoSeleccionado:  Producto  = {
    id :  null ,
    nombre:null,
    descripcion:null,
    precio:  null,
    referencia : null,
    fecha_creacion: null
  };

  constructor( private apiService: ApiService,
               private  route: ActivatedRoute) { }

  ngOnInit() {

    const id:any = this.route.snapshot.paramMap.get('id');

    if (id != 'nuevo') {


      this.apiService.leerUnProducto(id).subscribe((res: any)=>{
        this.ProductoSeleccionado = res.data[0];
        console.log("entre producto..",this.ProductoSeleccionado);
      })

    }

  }

  seleccionarProducto(producto: any){
    this.ProductoSeleccionado = producto;
  }

  crearOActualizarProducto(form){

    if(this.ProductoSeleccionado && this.ProductoSeleccionado.id){
      form.value.id = this.ProductoSeleccionado.id;

      this.apiService.actualizarProducto(form.value).subscribe((res: any)=>{


        Swal.fire({
          title: '',
          text: 'Registro actualizado correctamente'
        });

      });
    }
    else{

      this.apiService.crearProducto(form.value).subscribe((res: any)=>{

        Swal.fire({
          title: '',
          text: 'Registro creado correctamente'
        });

      });
    }

  }


}
