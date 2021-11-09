import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit  {
  constructor(public router: Router) {}
  private redirectCount = 10;

  public get redirectMessage(): string {
    if (this.redirectCount <= 0) {
      return 'Redirecting ...';
    }

    return `Redirecting you to home page in ${this.redirectCount}.`;
  }

  public ngOnInit(): void {
    setInterval(() => {
      this.redirectCount--;

      if (this.redirectCount <= 0) {
        this.router.navigate(['']);
        this.redirectCount = 10; //reset the timer to work multiple times
      }
    }, 1000);
  }

}
