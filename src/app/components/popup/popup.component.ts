import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { fadeInOutAnimation } from 'src/app/others/animations/fade-in-out/fade-in-out.animation';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [fadeInOutAnimation]
})
export class PopupComponent  {
  @Input() public message = '';
  public isShown = false;

  public show(): void {
    this.isShown = true;

    const subscription = of(null).pipe(delay(3000)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    })
  }


}
