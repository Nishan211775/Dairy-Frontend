import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkAddComponent } from './milk-add.component';

describe('MilkAddComponent', () => {
  let component: MilkAddComponent;
  let fixture: ComponentFixture<MilkAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
