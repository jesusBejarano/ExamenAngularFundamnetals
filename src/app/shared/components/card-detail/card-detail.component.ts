import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  @Input() title: string;
  @Input() section: string;
  @Input() classes: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
