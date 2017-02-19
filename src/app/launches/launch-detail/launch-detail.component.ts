import { Component, OnInit, Input } from '@angular/core';

import { Launch } from '../launch';
import { LaunchService } from '../launch.service';

@Component({
  moduleId: module.id,
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html'
})
export class LaunchDetailComponent implements OnInit {
  @Input() selectedLaunch: Launch;

  constructor(private launchService: LaunchService) { }

  ngOnInit() {
  }

}
