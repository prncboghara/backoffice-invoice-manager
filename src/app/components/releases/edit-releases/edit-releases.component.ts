import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRelease } from 'src/app/models/releases';
import { ReleaseFormService } from 'src/app/services/release/release-form.service';
import { ReleaseService } from 'src/app/services/release/release.service';

@Component({
  selector: 'app-edit-releases',
  templateUrl: './edit-releases.component.html',
  styleUrls: ['./edit-releases.component.css']
})
export class EditReleasesComponent implements OnInit {

  constructor(
    private releaseSvc: ReleaseService,
    private releaseFormSvc: ReleaseFormService,
    private route: ActivatedRoute,
    private router: Router) { }
  form: FormGroup = this.releaseFormSvc.initForm(null);
  id: string;
  editMode: boolean = false;
  mode: string = 'create'
  errorMsg: string;

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params.id
      this.editMode = JSON.parse(params.editMode)
      if (this.id !== 'new') {
        this.mode = 'update'
        this.getRelease(this.id)
      }
    });
  }

  saveRelease() {
    if (this.mode === 'update') {
      this.updateRelease()
    } else {
      this.createRelease()
    }
  }

  getRelease(id) {
    this.releaseSvc.getReleaseById(id).subscribe((res: { release: IRelease }) => {
      this.form = this.releaseFormSvc.initForm(res.release)
    }, err => { })
  }

  cancleUpdate() {
    this.router.navigate(['/releases'])
  }

  editRelease() {
    this.router.navigate([`/releases/${this.id}`, { editMode: true }])
  }

  createRelease() {
    delete this.form.value._id
    this.releaseSvc.createRelease(this.form.value).subscribe(res => {
      this.router.navigate(['/releases'])
    }, err => {
      this.errorMsg = err.error.error
    })
  }

  updateRelease() {
    this.releaseSvc.updateRelease(this.form.value).subscribe(res => {
      this.router.navigate(['/releases'])
    }, err => {
      this.errorMsg = err.error.error
    })
  }

  makeCurrentVersion() {
    this.releaseSvc.makeCurrentVersion(this.form.value._id).subscribe(res => {
      this.router.navigate(['/releases'])
    }, err => {
      this.errorMsg = err.error.error
    })
  }
}
