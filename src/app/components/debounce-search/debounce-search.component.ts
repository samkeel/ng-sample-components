import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss']
})
export class DebounceSearchComponent  {
  @Input() public searchTerm = '';
  @Input() public placeholder = 'Search';
  @Output() public searchUpdate = new EventEmitter<string>();

  private searchUpdate$ = new Subject<string>();

  public updateSearchTerm(term: string): void {
    this.searchUpdate$.next(term);
  }

  constructor() {
    this.searchUpdate$.pipe(
      debounceTime(250), 
      distinctUntilChanged()
    ).subscribe(value => {
      this.searchUpdate.emit(value);
    });
  }
}
