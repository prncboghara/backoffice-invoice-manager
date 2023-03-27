import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRelease } from 'src/app/models/releases';
import { ReleaseService } from 'src/app/services/release/release.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit {

  constructor(
    private releaseSvc: ReleaseService,
    private router:Router) { }
  isFound: boolean = false
  releases:IRelease[] = []

  ngOnInit(): void {
    this.getReleases()
  }

  getReleases() {
    this.isFound = true
    this.releaseSvc.getAllReleases().subscribe((res: { releases: IRelease[] }) => {
      this.releases = res.releases;
      if(this.releases && this.releases.length) this.isFound = true
    }, err => {
      this.isFound = false
    })
  }

  addRelease() {
    this.router.navigate(['/releases/new', {editMode:true}])
  }

  editRelease(release:IRelease) {
    this.router.navigate([`/releases/${release._id}`, {editMode:false}])
  }

}
