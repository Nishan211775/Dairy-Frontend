import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedDairyComponent } from './requested-dairy.component';

describe('RequestedDairyComponent', () => {
  let component: RequestedDairyComponent;
  let fixture: ComponentFixture<RequestedDairyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedDairyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedDairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
