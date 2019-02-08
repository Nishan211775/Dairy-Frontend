import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDairyDashboardComponent } from './master-dairy-dashboard.component';

describe('MasterDairyDashboardComponent', () => {
  let component: MasterDairyDashboardComponent;
  let fixture: ComponentFixture<MasterDairyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDairyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDairyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
