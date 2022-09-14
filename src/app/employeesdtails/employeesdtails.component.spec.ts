import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesdtailsComponent } from './employeesdtails.component';

describe('EmployeesdtailsComponent', () => {
  let component: EmployeesdtailsComponent;
  let fixture: ComponentFixture<EmployeesdtailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesdtailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesdtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
