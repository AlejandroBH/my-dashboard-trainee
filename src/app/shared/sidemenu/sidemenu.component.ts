import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { routes } from '@app/app.routes';

@Component({
  selector: 'app-sidemenu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidemenu.component.html',
  styles: ``,
})
export class SidemenuComponent {
  public menuItems = [
    routes
      .map((route) => route.children ?? [])
      .flat()
      .filter((route) => route && route.path)
      .filter((route) => !route.path?.includes(':')),
  ];
}
