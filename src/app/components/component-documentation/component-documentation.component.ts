import { Component } from '@angular/core';
import { AccordionItem } from '../accordian/accordian-item.interface';
import { LoaderType } from '../loader/models/loader-type.enum';
import { RibbonLocation } from '../ribbon/ribbon-location.enum';
import { RibbonType } from '../ribbon/ribbon-type';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss'],
})
export class ComponentDocumentationComponent {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false,
    },
  ];

  public progressValue = 25;
  public loaderType = LoaderType.Loading;

  public toggleValue = false;

  public debounceExampleMethod(value: string): void {
    console.log('Component Documentation', value);
  }

  public tabs: { title: string; active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];
  public selectedTab = 0;

  public RibbonType = RibbonType;
  public RibbonLocation = RibbonLocation;
  public ribbonStyle = {
    type: RibbonType.Info,
    location: RibbonLocation.BottomLeft,
  };
}
