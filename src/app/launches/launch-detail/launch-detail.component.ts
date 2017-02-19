import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Launch } from '../launch';
import { LaunchService } from '../launch.service';

@Component({
  moduleId: module.id,
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html'
})
export class LaunchDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private launchIndex: number;
  selectedLaunch: Launch;

  constructor(private launchService: LaunchService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          this.launchIndex = params['id'];
          this.selectedLaunch = this.launchService.getLaunch(this.launchIndex);
        }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete() {
    this.launchService.deleteLaunch(this.selectedLaunch);
    this.router.navigate(['/launches']);
  }

}
