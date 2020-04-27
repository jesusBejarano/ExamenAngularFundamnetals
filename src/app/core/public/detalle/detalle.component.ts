import { Component, OnInit } from '@angular/core';
import { DetalleCursoResponse } from 'src/app/modules/Interfaces/DetalleCursoResponse';
import { GalaxyService } from 'src/app/modules/services/galaxy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  detalles: DetalleCursoResponse;
  constructor(private galaxy:GalaxyService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
   // console.log('FIRE - ' + id);
    this.galaxy.getDetalle(id).subscribe(
      res => this.detalles = res,
      err => console.log(err),
    )
  }

}
