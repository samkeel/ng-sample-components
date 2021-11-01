import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { IFormDirty } from './form.dirty.interface';

@Injectable({
  providedIn: 'root',
})
export class FormDirtyGuard implements CanDeactivate<unknown> {
  public canDeactivate(component: IFormDirty): boolean {
    if (component.form.dirty) {
      return confirm('the forms dirty. are you sure you want to leave?');
    }
    return true;
  }
}
