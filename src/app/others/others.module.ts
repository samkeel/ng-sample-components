import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OTHER_ROUTES } from './others.routes';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';



@NgModule({
  declarations: [
    OtherDocumentationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(OTHER_ROUTES)
  ]
})
export class OthersModule { }
