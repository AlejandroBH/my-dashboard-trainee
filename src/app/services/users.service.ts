import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { User, UserResponse } from '@app/interfaces/req-response';
import { delay } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<UserResponse>('https://reqres.in/api/users', {
        headers: new HttpHeaders().append('x-api-key', 'reqres-free-v1'),
      })
      .pipe(delay(2000))
      .subscribe((res) => {
        // console.log(res);
        this.#state.set({
          loading: false,
          users: res.data,
        });
      });
  }
}
