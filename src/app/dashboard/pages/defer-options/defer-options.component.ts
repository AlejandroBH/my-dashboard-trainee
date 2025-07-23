import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@app/shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  imports: [HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
})
export default class DeferOptionsComponent {
  constructor() {
    console.log('HeavyLoader Fast creado');
  }
}
