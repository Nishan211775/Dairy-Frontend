import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyNavbarComponent } from './dairy-navbar.component';

describe('DairyNavbarComponent', () => {
  let component: DairyNavbarComponent;
  let fixture: ComponentFixture<DairyNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairyNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
