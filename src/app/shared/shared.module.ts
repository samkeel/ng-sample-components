import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from '../components/main-card/main-card.component';

@NgModule({
  declarations: [
    MainCardComponent
  ],
  exports: [
    MainCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
