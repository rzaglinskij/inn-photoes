import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoesCardComponent } from './photoes-card.component';

describe('PhotoesCardComponent', () => {
  let component: PhotoesCardComponent;
  let fixture: ComponentFixture<PhotoesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
