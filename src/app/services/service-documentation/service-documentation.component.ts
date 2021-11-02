import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-service-documentation',
  templateUrl: './service-documentation.component.html',
  styleUrls: ['./service-documentation.component.scss'],
})
export class ServiceDocumentationComponent implements OnInit {
  public user = new User();
  public userID = 1;

  constructor(public userService: UserService) {}

  public ngOnInit(): void {
    this.userService.getUserById(this.randomUserID).subscribe({
      next: (response: any) => {
        this.user = response;
        console.log(this.user);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete.');
      },
    });
  }

  public get randomUserID(): number {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1
  }
}
