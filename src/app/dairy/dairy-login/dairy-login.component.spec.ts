import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyLoginComponent } from './dairy-login.component';

describe('DairyLoginComponent', () => {
  let component: DairyLoginComponent;
  let fixture: ComponentFixture<DairyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
