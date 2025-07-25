import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { UsersService } from '@app/services/users.service';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-users',
  imports: [TitleComponent, RouterLink],
  templateUrl: './users.component.html',
})
export default class UsersComponent {
  public usersService = inject(UsersService);
}
