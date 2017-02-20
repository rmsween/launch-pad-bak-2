import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Launch } from '../launch';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-launch-new',
  templateUrl: './launch-new.component.html',
  styles: []
})
export class LaunchNewComponent implements OnInit {
  launchForm: FormGroup;
  private launchIndex: number;
  private launch: Launch;

  constructor(private launchService: LaunchService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.launch = null;
    this.initForm();
  }

  onSubmit() {
    const newLaunch = this.launchForm.value;
    this.launchService.addLaunch(newLaunch);
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let launchDivision = '';
    let launchProject = '';
    let clientApproval = '';
    let launchDate = '';

    this.launchForm = this.formBuilder.group({
      division: [launchDivision, Validators.required],
      project: [launchProject],
      clientApproval: [clientApproval],
      launchDate: [launchDate, Validators.required]
    })
  }

}
