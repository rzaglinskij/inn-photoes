import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoesPageComponent } from './photoes-page.component';

describe('PhotoesPageComponent', () => {
  let component: PhotoesPageComponent;
  let fixture: ComponentFixture<PhotoesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
