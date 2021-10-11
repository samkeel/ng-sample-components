import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {
  @Input() public title = '';
  @Input() public subTitle = '';
  @Input() public iconClasses = '';

  constructor() { }

  ngOnInit(): void {
  }

}
