import { Routes } from '@angular/router';

import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { LaunchNewComponent } from './launch-new/launch-new.component';
import { LaunchConflictComponent } from './launch-conflict/launch-conflict.component';

export const LAUNCH_ROUTES: Routes = [
    { path: '', component: LaunchNewComponent },
    { path: ':id', component: LaunchDetailComponent },
    { path: 'new', component: LaunchNewComponent },
    { path: 'conflict-check', component: LaunchConflictComponent }
];