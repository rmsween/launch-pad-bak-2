import { Component, OnInit, Input } from '@angular/core';

import { Launch } from '../launch';

@Component({
  moduleId: module.id,
  selector: 'app-launch-item',
  templateUrl: './launch-item.component.html'
})
export class LaunchItemComponent implements OnInit {
  @Input() launch: Launch;
  launchId: number;

  constructor() { }

  ngOnInit() {
  }

}
