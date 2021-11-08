import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from '../components/main-card/main-card.component';
import { ModalComponent } from '../components/modal/modal.component';
import { PipeFilterTermPipe } from '../pipes/pipe-filter-term/pipe-filter-term.pipe';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { TabsComponent } from '../components/tabs/tabs.component';

@NgModule({
  declarations: [
    MainCardComponent,
    ModalComponent,
    PipeFilterTermPipe,
    SnackbarComponent,
    FooterComponent,
    TabsComponent
  ],
  exports: [
    MainCardComponent,
    ModalComponent,
    PipeFilterTermPipe,
    SnackbarComponent,
    FooterComponent,
    TabsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
