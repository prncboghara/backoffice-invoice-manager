import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditReleasesComponent } from 'src/app/components/releases/edit-releases/edit-releases.component';
import { ReleasesComponent } from 'src/app/components/releases/releases.component';

const routes: Routes = [{
  path: '', component: ReleasesComponent,
},{
  path: ':id', component: EditReleasesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleasesRoutingModule { }
