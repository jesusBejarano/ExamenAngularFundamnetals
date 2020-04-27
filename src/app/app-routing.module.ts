import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './core/public/public.component';
import { HomeComponent } from './core/public/home/home.component';
import { DetalleComponent } from './core/public/detalle/detalle.component';


const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
    children:[
      {path:'',component:HomeComponent  },
      {path:'detalle/:id',component:DetalleComponent  }
  
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
