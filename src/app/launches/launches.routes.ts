import { Routes } from '@angular/router';

import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';

export const LAUNCH_ROUTES: Routes = [
    { path: '', component: LaunchListComponent },
    { path: 'id', component: LaunchDetailComponent },
    { path: ':id/edit', component: LaunchDetailComponent }
];