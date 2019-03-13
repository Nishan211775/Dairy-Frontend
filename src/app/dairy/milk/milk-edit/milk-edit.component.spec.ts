import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkEditComponent } from './milk-edit.component';

describe('MilkEditComponent', () => {
  let component: MilkEditComponent;
  let fixture: ComponentFixture<MilkEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
