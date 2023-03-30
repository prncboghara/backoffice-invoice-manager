import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSettingsComponent } from 'src/app/components/settings/edit-settings/edit-settings.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';

const routes: Routes = [{
  path: '', component: SettingsComponent,
}, {
  path: ':id', component: EditSettingsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
