import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReleaseFormService } from 'src/app/services/release/release-form.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  @Input() form: FormGroup
  @Input() editMode: boolean;
  constructor(private releaseSvc: ReleaseFormService) { }


  ngOnInit(): void {
  }

  get bugFixes(): FormArray {
    return this.form.get('bug_fixes') as FormArray;
  }

  addBugFixes() {
    this.bugFixes.push(this.releaseSvc.getFormGroup())
  }

  removeBugFixes(index) {
    this.bugFixes.removeAt(index)
  }

  addLists(section) {
    section.get('lists').push(new FormControl("", [Validators.required]))
  }

  removeLists(section, index) {
    section.get('lists').removeAt(index)
  }

}
