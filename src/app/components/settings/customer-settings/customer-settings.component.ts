import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { SettingFormService } from 'src/app/services/settings/setting-form.service';

@Component({
  selector: 'app-customer-settings',
  templateUrl: './customer-settings.component.html',
  styleUrls: ['./customer-settings.component.css']
})
export class CustomerSettingsComponent {
  @Input() form: FormGroup;
  @Input() editMode: boolean;

  constructor(private settingFormSvc: SettingFormService) { }

  ngOnInit(): void {
  }

  get customerSettings(): FormArray {
    return this.customerSettingsFormGroup.get('groups') as FormArray;
  }

  get customerSettingsFormGroup(): FormGroup {
    return this.form.get('customer_settings') as FormGroup;
  }

  addSetting() {
    this.customerSettings.push(this.settingFormSvc.getFormGroup())
  }

  removeSetting(index) {
    this.customerSettings.removeAt(index)
  }

}
