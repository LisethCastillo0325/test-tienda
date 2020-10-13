import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../services/api.service";
import {Producto} from "../../models/producto";
import Swal from "sweetalert2";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  productos:  Producto[];
  carrito = [];


  constructor(private http: HttpClient,
              private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.leerProductos().subscribe((res: any)=>{
      this.productos = res.data;
    })
  }


  agregarProducto(producto){


      var itemActual;

      for (var i = 0; i < this.carrito.length; i++) {
        if (this.carrito[i].Producto.id == producto.id) {
          itemActual = this.carrito[i];
        }
      }

      //si el producto no ha sido agregado se agrega
      if (!itemActual) {
        this.carrito.push({
          Producto: producto,
          Cantidad: 1
        });
      } else {
        //si ya fue agregado el producto se aumenta la cantidad
        itemActual.Cantidad++;
      }

  }

  comprar(){

    this.carrito = [];

    Swal.fire({
      title: '',
      text: 'Su Compra se Realiza Sactisfactoriemente'
    });
  }

}
