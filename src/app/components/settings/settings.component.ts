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
    this.isFound = true
    this.settingsSvc.getAllSettings().subscribe((res: { settings: ISettings[] }) => {
      this.settings = res.settings;
      if (this.settings && this.settings.length) this.isFound = true
    }, err => {
      this.isFound = false
    })
  }

  addSettings() {
    this.router.navigate(['/settings/new', { editMode: true }])
  }

  editSetting(setting: ISettings) {
    this.router.navigate([`/settings/${setting._id}`, { editMode: false }])
  }
}
