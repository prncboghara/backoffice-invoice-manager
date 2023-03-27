import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReleaseFormService } from 'src/app/services/release/release-form.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() editMode: boolean;
  constructor(private releaseSvc: ReleaseFormService) { }

  ngOnInit(): void {
  }

  get newFeatures(): FormArray {
    return this.form.get('new_features') as FormArray;
  }

  addNewFeature() {
    this.newFeatures.push(this.releaseSvc.getFormGroup())
  }

  removeFeature(index) {
    this.newFeatures.removeAt(index)
  }

  addLists(section) {
    section.get('lists').push(new FormControl("", [Validators.required]))
  }

  removeLists(section, index) {
    section.get('lists').removeAt(index)
  }

}
