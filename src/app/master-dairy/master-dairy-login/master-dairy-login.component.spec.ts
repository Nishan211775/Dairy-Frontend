import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDairyLoginComponent } from './master-dairy-login.component';

describe('MasterDairyLoginComponent', () => {
  let component: MasterDairyLoginComponent;
  let fixture: ComponentFixture<MasterDairyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDairyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDairyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
