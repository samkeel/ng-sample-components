import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseRoute = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http: HttpClient) { }

  public getUserById(id: number) {
    return this.http.get(`${this.baseRoute}/${id}`).pipe(
      map((value) => new User(value))
    );
  }
}
