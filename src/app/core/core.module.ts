import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { DetalleComponent } from './public/detalle/detalle.component';
import { RouterModule } from '@angular/router';
import { SharedComponentModule } from '../shared/components/components.module';
import { ServicesModule } from '../modules/services/services.module';



@NgModule({
  declarations: [
    PublicComponent,
     HomeComponent,
     DetalleComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentModule,
    ServicesModule
  ],
  exports:[
    PublicComponent,
    HomeComponent,
    DetalleComponent
  ]
})
export class CoreModule { }
