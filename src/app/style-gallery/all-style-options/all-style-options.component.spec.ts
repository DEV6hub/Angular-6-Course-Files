import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStyleOptionsComponent } from './all-style-options.component';

describe('AllStyleOptionsComponent', () => {
  let component: AllStyleOptionsComponent;
  let fixture: ComponentFixture<AllStyleOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStyleOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStyleOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
