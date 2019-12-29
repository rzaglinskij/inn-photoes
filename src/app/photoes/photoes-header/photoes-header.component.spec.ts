import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoesHeaderComponent } from './photoes-header.component';

describe('PhotoesHeaderComponent', () => {
  let component: PhotoesHeaderComponent;
  let fixture: ComponentFixture<PhotoesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
