import { Component, OnInit } from '@angular/core';
import { GalaxyService } from 'src/app/modules/services/galaxy.service';
import { CursoResponse } from 'src/app/modules/Interfaces/CursoResponse';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cursos:CursoResponse[]=[];

  constructor(private galaxy: GalaxyService, private router: Router) { }

  ngOnInit(): void {
    this.galaxy.getCurso().subscribe(
      res => this.cursos = res,
      err => console.log(err)
    )
  }

  goDetalle(id: string){
    this.router.navigate(['/detalle',id])
  }

}
