import { Routes } from '@angular/router';

import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { LaunchNewComponent } from './launch-new/launch-new.component';
import { LaunchConflictComponent } from './launch-conflict/launch-conflict.component';

export const LAUNCH_ROUTES: Routes = [
    { path: 'new', component: LaunchNewComponent },
    { path: ':id', component: LaunchDetailComponent },
    { path: 'conflict-check', component: LaunchConflictComponent }
];