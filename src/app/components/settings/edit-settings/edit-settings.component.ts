import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ISettings } from '../../../models/settings';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { SettingFormService } from 'src/app/services/settings/setting-form.service';
import { ConfirmationComponent } from '../../shared/confirmation/confirmation.component';


@Component({
  selector: 'app-edit-settings',
  templateUrl: './edit-settings.component.html',
  styleUrls: ['./edit-settings.component.css']
})
export class EditSettingsComponent {

  constructor(
    private settingSvc: SettingsService,
    private settingFormSvc: SettingFormService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal) { }

  form: FormGroup = this.settingFormSvc.initForm(null);
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
        this.getSettings(this.id)
      }
    });
  }

  saveSetting() {
    if (this.mode === 'update') {
      this.updateSetting()
    } else {
      this.createSetting()
    }
  }

  getSettings(id) {
    this.settingSvc.getSettingById(id).subscribe((res: { setting: ISettings }) => {
      this.form = this.settingFormSvc.initForm(res.setting)
    }, err => { })
  }

  cancleUpdate() {
    this.router.navigate(['/settings'])
  }

  editSetting() {
    this.router.navigate([`/settings/${this.id}`, { editMode: true }])
  }

  createSetting() {
    delete this.form.value._id
    this.settingSvc.createSetting(this.form.value).subscribe(res => {
      this.router.navigate(['/settings'])
    }, err => {
      this.errorMsg = err.error.error
    })
  }

  updateSetting() {
    console.log(this.form.value)
    this.settingSvc.updateSetting(this.form.value).subscribe(res => {
      this.router.navigate(['/settings'])
    }, err => {
      this.errorMsg = err.error.error
    })
  }

  deleteSetting() {
    const modalRef = this.modalService.open(ConfirmationComponent)
    modalRef.componentInstance.title = 'Confirmation'
    modalRef.componentInstance.descirption = 'Are you sure want to delete this setting?'
    modalRef.result.then(res => {
      if (!res) return
      this.settingSvc.deleteSetting(this.form.value._id).subscribe(res => {
        this.router.navigate(['/settings'])
      }, err => {
        this.errorMsg = err.error.error
      })
    })
  }

  makeCurrentVersion() {
    this.settingSvc.makeCurrentVersion(this.form.value._id).subscribe(res => {
      this.router.navigate(['/settings'])
    }, err => {
      this.errorMsg = err.error.error
    })
  }

}
