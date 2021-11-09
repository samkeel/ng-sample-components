import { Component, OnInit } from '@angular/core';
import { AccordionItem } from './components/accordian/accordian-item.interface';
import { TitleService } from './services/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public titleService: TitleService) {}

  public ngOnInit() {
    this.titleService.initializeTitleService();
  }
}
