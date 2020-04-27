import { Injectable, ModuleWithProviders } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ServicesModule } from './services.module';

import { CursoResponse } from '../Interfaces/CursoResponse';
import { DetalleCursoResponse } from '../Interfaces/DetalleCursoResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: ServicesModule
})
export class GalaxyService{

  constructor(private http:HttpClient) { }

  getCurso() : Observable<CursoResponse[]>{
    return this.http.get<CursoResponse[]>('https://ionicapp-7a398.firebaseio.com/galaxydemy/subjects.json');   
  }

  getDetalle(id:string):Observable<DetalleCursoResponse>{
    return this.http.get<DetalleCursoResponse>(`https://ionicapp-7a398.firebaseio.com/galaxydemy/subject/${id}.json`);
  }

}
