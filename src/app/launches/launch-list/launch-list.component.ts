import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
  @Output() launchSelected = new EventEmitter<Launch>();

  constructor(private launchService: LaunchService) { }

  ngOnInit() {
    this.launches = this.launchService.getLaunches();
  }

  onSelected(launch: Launch) {
    this.launchSelected.emit(launch);
  }

}
