import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarapidataComponent } from './carapidata.component';

describe('CarapidataComponent', () => {
  let component: CarapidataComponent;
  let fixture: ComponentFixture<CarapidataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarapidataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarapidataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
