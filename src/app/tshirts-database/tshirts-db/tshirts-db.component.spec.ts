import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtsDbComponent } from './tshirts-db.component';

describe('TshirtsDbComponent', () => {
  let component: TshirtsDbComponent;
  let fixture: ComponentFixture<TshirtsDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TshirtsDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TshirtsDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
