import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  header = {
    brand : 'Cursos',
    logo : 'assets/logo.png',
    brandUrl: '/'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
