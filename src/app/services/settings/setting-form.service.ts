import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SettingFormService {

  constructor() { }

  initForm(setting?) {
    return new FormGroup({
      accounts_settings: new FormGroup({ 'groups': this.getFormArray(setting?.accounts_settings?.groups || []) }),
      customer_settings: new FormGroup({ 'groups': this.getFormArray(setting?.customer_settings?.groups || []) }),
      is_active: new FormControl(setting?.is_active || false),
      _id: new FormControl(setting?._id || ""),
    })
  }

  getFormArray(groups?) {
    const formArray = new FormArray([])
    if (groups && groups.length) {
      groups.forEach(group => {
        formArray.push(this.getFormGroup(group))
      });
    }
    return formArray;
  }

  getFormGroup(group?) {
    return new FormGroup({
      group_name: new FormControl(group?.group_name || "", [Validators.required]),
      group_key: new FormControl(group?.group_key || "", [Validators.required]),
    })
  }
}
