import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReleasesComponent } from './edit-releases.component';

describe('EditReleasesComponent', () => {
  let component: EditReleasesComponent;
  let fixture: ComponentFixture<EditReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReleasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
