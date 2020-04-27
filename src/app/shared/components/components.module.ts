import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    CardHomeComponent,
     CardDetailComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    CardHomeComponent,
    CardDetailComponent

  ]
})
export class SharedComponentModule { }
