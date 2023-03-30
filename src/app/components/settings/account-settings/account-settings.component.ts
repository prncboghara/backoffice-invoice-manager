import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { SettingFormService } from 'src/app/services/settings/setting-form.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent {
  @Input() form: FormGroup;
  @Input() editMode: boolean;

  constructor(private settingFormSvc: SettingFormService) { }


  get accountSetting(): FormArray {
    return this.accountSettingsFormGroup.get('groups') as FormArray;
  }

  get accountSettingsFormGroup(): FormGroup {
    return this.form.get('accounts_settings') as FormGroup;
  }

  addSetting() {
    this.accountSetting.push(this.settingFormSvc.getFormGroup())
  }

  removeSetting(index) {
    this.accountSetting.removeAt(index)
  }
}
