import { Component, OnInit } from '@angular/core';

import { Launch } from '../launch';
import { LaunchItemComponent } from './launch-item.component';
import { LaunchService } from '../launch.service';

@Component({
  moduleId: module.id,
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html'
})
export class LaunchListComponent implements OnInit {
  launches: Launch[] = [];

  constructor(private launchService: LaunchService) { }

  ngOnInit() {
    this.launches = this.launchService.getLaunches();
  }

}
