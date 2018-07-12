import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGraphicsComponent } from './all-graphics.component';

describe('AllGraphicsComponent', () => {
  let component: AllGraphicsComponent;
  let fixture: ComponentFixture<AllGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
