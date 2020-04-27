import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() logo:string;
  @Input() brand:string;
  @Input() brandUrl:string;

  constructor() { }

  ngOnInit(): void {
  }

}
