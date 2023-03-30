import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { EditSettingsComponent } from 'src/app/components/settings/edit-settings/edit-settings.component';
import { SharedModule } from '../shared/shared.module';
import { AccountSettingsComponent } from 'src/app/components/settings/account-settings/account-settings.component';
import { CustomerSettingsComponent } from 'src/app/components/settings/customer-settings/customer-settings.component';


@NgModule({
  declarations: [
    SettingsComponent,
    EditSettingsComponent,
    CustomerSettingsComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
