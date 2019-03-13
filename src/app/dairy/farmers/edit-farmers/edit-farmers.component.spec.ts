import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFarmersComponent } from './edit-farmers.component';

describe('EditFarmersComponent', () => {
  let component: EditFarmersComponent;
  let fixture: ComponentFixture<EditFarmersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFarmersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
