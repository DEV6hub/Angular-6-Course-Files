import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleColorsComponent } from './style-colors.component';

describe('StyleColorsComponent', () => {
  let component: StyleColorsComponent;
  let fixture: ComponentFixture<StyleColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
