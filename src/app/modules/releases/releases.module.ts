import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleasesRoutingModule } from './releases-routing.module';
import { ReleasesComponent } from 'src/app/components/releases/releases.component';
import { SharedModule } from '../shared/shared.module';
import { EditReleasesComponent } from 'src/app/components/releases/edit-releases/edit-releases.component';
import { FeaturesComponent } from 'src/app/components/releases/features/features.component';
import { BugsComponent } from 'src/app/components/releases/bugs/bugs.component';


@NgModule({
  declarations: [
    ReleasesComponent,
    EditReleasesComponent,
    FeaturesComponent,
    BugsComponent
  ],
  imports: [
    CommonModule,
    ReleasesRoutingModule,
    SharedModule
  ]
})
export class ReleasesModule { }
