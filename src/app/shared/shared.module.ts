import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from '../components/main-card/main-card.component';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  declarations: [
    MainCardComponent,
    ModalComponent
  ],
  exports: [
    MainCardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
