import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LaunchesComponent } from './launches/launches.component';
import { LaunchListComponent } from './launches/launch-list/launch-list.component';
import { LaunchDetailComponent } from './launches/launch-detail/launch-detail.component';
import { LaunchItemComponent } from './launches/launch-list/launch-item.component';
import { LaunchService } from './launches/launch.service';
import { LaunchNewComponent } from './launches/launch-new/launch-new.component';
import { LaunchConflictComponent } from './launches/launch-conflict/launch-conflict.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LaunchesComponent,
    LaunchListComponent,
    LaunchDetailComponent,
    LaunchItemComponent,
    LaunchNewComponent,
    LaunchConflictComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [LaunchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
