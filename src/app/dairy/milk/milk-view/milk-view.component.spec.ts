import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkViewComponent } from './milk-view.component';

describe('MilkViewComponent', () => {
  let component: MilkViewComponent;
  let fixture: ComponentFixture<MilkViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
