import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPE_ROUTES } from './pipes.routes';
import { SharedModule } from '../shared/shared.module';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipePipe } from './flatten-pipe/flatten-pipe.pipe';
import { PipeFilterTermPipe } from './pipe-filter-term/pipe-filter-term.pipe';


@NgModule({
  declarations: [
    PipeDocumentationComponent,
    TruncatePipe,
    CreditCardFormatterPipe,
    FlattenPipePipe,
    PipeFilterTermPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PIPE_ROUTES)
  ]
})
export class PipesModule { }
