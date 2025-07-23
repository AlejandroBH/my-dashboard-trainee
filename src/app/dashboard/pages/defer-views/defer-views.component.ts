import { Component } from '@angular/core';

import { HeavyLoadersSlowComponent } from '@app/shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-defer-views',
  imports: [HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {}
