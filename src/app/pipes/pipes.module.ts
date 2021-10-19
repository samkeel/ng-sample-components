import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPE_ROUTES } from './pipes.routes';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PipeDocumentationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PIPE_ROUTES)
  ]
})
export class PipesModule { }
