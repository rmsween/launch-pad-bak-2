import { Component, Input } from '@angular/core';

import { Launch } from '../launch';

@Component({
  moduleId: module.id,
  selector: 'app-launch-item',
  templateUrl: './launch-item.component.html'
})
export class LaunchItemComponent {
  @Input() launch: Launch;
  @Input() launchId: number;

}
