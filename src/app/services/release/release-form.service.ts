import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReleaseFormService {

  constructor() { }

  initForm(release?) {
    return new FormGroup({
      _id: new FormControl(release?._id || ""),
      is_current: new FormControl(release?.is_current || false),
      version: new FormControl(release?.version || "", [Validators.required]),
      description_start: new FormControl(release?.description_start),
      description_end: new FormControl(release?.description_end),
      new_features: this.getFormArray(release?.new_features || []),
      bug_fixes: this.getFormArray(release?.bug_fixes || [])
    })
  }

  getFormArray(sections?) {
    const formArray = new FormArray([])
    if(sections && sections.length) {
      sections.forEach(section => {
        formArray.push(this.getFormGroup(section))
      });
    }
    return formArray;
  }

  getFormGroup(section?) {
    return new FormGroup({
      name: new FormControl(section?.name || "", [Validators.required]),
      lists: this.getListsArray(section?.lists || [])
    })
  }

  getListsArray(lists){
    let formArray = new FormArray([])
    if(lists && lists.length){
      lists.forEach(list => {
        formArray.push(new FormControl(list, [Validators.required]))
      });
    }
    return formArray;
  }
}
