import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserapiComponent } from './userapi.component';

describe('UserapiComponent', () => {
  let component: UserapiComponent;
  let fixture: ComponentFixture<UserapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
