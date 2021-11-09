import { Component, ViewChild } from '@angular/core';
import { AccordionItem } from '../accordian/accordian-item.interface';
import { ButtonMeta } from '../button-toggle/button-meta.model';
import { LoaderType } from '../loader/models/loader-type.enum';
import { PillType } from '../pill/pill-type.enum';
import { RibbonLocation } from '../ribbon/ribbon-location.enum';
import { RibbonType } from '../ribbon/ribbon-type';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SocialMediaIcon } from '../social-media-bar/models/social-media-icon.interface';
import { SocialMedia } from '../social-media-bar/models/social-media.enum';

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

  public loaded = false;

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

  public buttonToggleOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' }),
  ];

  @ViewChild(SnackbarComponent) public snackBar!: SnackbarComponent;

  public snackbarShow(): void {
    // this.snackBar.show(); - component level
    this.snackBar.showMessage('Snackbar Example'); // - service level
  }

  public socialMedia: SocialMediaIcon[] = [
    {
      href: '',
      type: SocialMedia.Facebook,
    },
    {
      href: '',
      type: SocialMedia.Instagram,
    },
    {
      href: 'https://www.linkedin.com/in/samkeel',
      type: SocialMedia.LinkedIn,
    },
    {
      href: '',
      type: SocialMedia.Twitter,
    },
    {
      href: '',
      type: SocialMedia.YouTube,
    },
  ];

  public PillType = PillType;

  public isShownOverlay = false;
  
}
