import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Launch } from '../launch';
import { LaunchService } from '../launch.service';

@Component({
  moduleId: module.id,
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html'
})
export class LaunchDetailComponent implements OnInit, OnDestroy {
  launchForm: FormGroup;
  private launchIndex: number;
  private launch: Launch;
  private subscription: Subscription;

  constructor(private launchService: LaunchService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  onSubmit() {
    const newLaunch = this.launchForm.value;
    this.launchService.editLaunch(this.launch, newLaunch);
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          this.launchIndex = params['id'];
          this.launch = this.launchService.getLaunch(this.launchIndex);
          this.initForm();
        }
    );
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete() {
    this.launchService.deleteLaunch(this.launch);
    this.router.navigate(['/launches']);
  }

  private initForm() {
    let division = this.launch.division;
    let project = this.launch.project;
    let clientApproval = this.launch.clientApproval;
    let launchDate = this.launch.launchDate;

    this.launchForm = this.formBuilder.group({
      division: [division, Validators.required],
      project: [project],
      clientApproval: [clientApproval],
      launchDate: [launchDate],
    });
  }

}
