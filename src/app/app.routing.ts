import { Routes, RouterModule } from '@angular/router';

import { LaunchesComponent } from './launches/launches.component';
import { LAUNCH_ROUTES } from './launches/launches.routes';

const APP_ROUTES:Routes = [
    { path: '', redirectTo: '/launches', pathMatch: 'full' },
    { path: 'launches', component: LaunchesComponent, children: LAUNCH_ROUTES }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);