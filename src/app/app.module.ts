import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { AccordianComponent } from './components/accordian/accordian.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { APP_ROUTES } from './app.routes';
import { PipeDocumentationComponent } from './pipes/pipe-documentation/pipe-documentation.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainCardComponent,
    AccordianComponent,
    ProgressBarComponent,
    StarRatingComponent,
    TopOfPageComponent,
    ComponentDocumentationComponent,
    PipeDocumentationComponent,
    ServiceDocumentationComponent,
    DirectiveDocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
