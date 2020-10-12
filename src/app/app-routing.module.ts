import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductoComponent} from "./pages/producto/producto.component";
import {HomeComponent} from "./pages/home/home.component";
import {ProductoCrearEditarComponent} from "./pages/producto-crear-editar/producto-crear-editar.component";

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },

  {
    path : 'producto',
    component : ProductoComponent
  },
  { path: 'producto-crear-editar/:id',
    component: ProductoCrearEditarComponent
  },


  {
    path : '**',
    redirectTo : 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
