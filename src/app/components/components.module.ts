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



@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    StarRatingComponent,
    ProgressBarComponent,
    AccordianComponent,
    LoaderComponent,
    CreditCardInputComponent
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
