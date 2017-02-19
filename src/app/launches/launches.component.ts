import { Component, OnInit } from '@angular/core';

import { Launch } from './launch';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';

@Component({
  moduleId: module.id,
  selector: 'app-launches',
  templateUrl: './launches.component.html'
})
export class LaunchesComponent implements OnInit {

  selectedLaunch: Launch;

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.selectedLaunch = null;
  }

}
