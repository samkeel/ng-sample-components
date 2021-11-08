import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { RouterModule } from '@angular/router';
import { COMPONENT_ROUTES } from './components.routes';
import { SharedModule } from '../shared/shared.module';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AccordianComponent } from './accordian/accordian.component';
import { LoaderComponent } from './loader/loader.component';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';
import { QuoteComponent } from './quote/quote.component';
import { ToggleComponent } from './toggle/toggle.component';
import { RichTextViewerComponent } from './rich-text-viewer/rich-text-viewer.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { CounterComponent } from './counter/counter.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { PagingComponent } from './paging/paging.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { BannerCutOutComponent } from './banner-cut-out/banner-cut-out.component';
import { PopupComponent } from './popup/popup.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';

@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    StarRatingComponent,
    ProgressBarComponent,
    AccordianComponent,
    LoaderComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    QuoteComponent,
    ToggleComponent,
    RichTextViewerComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterComponent,
    SimpleTableComponent,
    PagingComponent,
    SortTableComponent,
    EmailFormComponent,
    RibbonComponent,
    ButtonToggleComponent,
    BannerCutOutComponent,
    PopupComponent,
    CountdownTimerComponent,
    SkeletonLoaderComponent,
    SocialMediaBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(COMPONENT_ROUTES)
  ]
})
export class ComponentsModule { }
