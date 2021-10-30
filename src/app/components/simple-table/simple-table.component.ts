import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {
  @Input() public tableData: any[] = [
    { first: 'Sam 1', last: 'Keel', dob: '05/09/84' },
    { first: 'Sam 2', last: 'Keel', dob: '05/09/84' },
    { first: 'Sam 3', last: 'Keel', dob: '05/09/84' },
    { first: 'Sam 4', last: 'Keel', dob: '05/09/84' },
  ];

  @Output() public headerSelected = new EventEmitter< { key: string, value: any }>();

  public headerSelection(key: any, value: any): void {
    this.headerSelected.emit({value, key});
  }
}
