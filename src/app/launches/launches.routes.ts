import { Routes } from '@angular/router';

import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { LaunchNewComponent } from './launch-new/launch-new.component';

export const LAUNCH_ROUTES: Routes = [
    { path: 'new', component: LaunchNewComponent },
];