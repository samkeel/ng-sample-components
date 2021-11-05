import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from '../components/main-card/main-card.component';
import { ModalComponent } from '../components/modal/modal.component';
import { PipeFilterTermPipe } from '../pipes/pipe-filter-term/pipe-filter-term.pipe';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@NgModule({
  declarations: [
    MainCardComponent,
    ModalComponent,
    PipeFilterTermPipe,
    SnackbarComponent
  ],
  exports: [
    MainCardComponent,
    ModalComponent,
    PipeFilterTermPipe,
    SnackbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
