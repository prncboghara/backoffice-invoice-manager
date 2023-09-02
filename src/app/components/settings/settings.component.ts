import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISettings } from '../../models/settings'
import { SettingsService } from 'src/app/services/settings/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  isFound: boolean = false
  settings: ISettings[] = []

  constructor(
    private settingsSvc: SettingsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSettings()
  }


  getSettings() {
  }

  addSettings() {
    this.router.navigate(['/settings/new', { editMode: true }])
  }

  editSetting(setting: ISettings) {
    this.router.navigate([`/settings/${setting._id}`, { editMode: false }])
  }
}
