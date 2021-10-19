import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { RouterModule } from '@angular/router';
import { DIRECTIVE_ROUTES } from './directives.routes';



@NgModule({
  declarations: [
    DirectiveDocumentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DIRECTIVE_ROUTES)
  ]
})
export class DirectivesModule { }
