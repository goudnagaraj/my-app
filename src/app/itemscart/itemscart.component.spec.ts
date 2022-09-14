import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemscartComponent } from './itemscart.component';

describe('ItemscartComponent', () => {
  let component: ItemscartComponent;
  let fixture: ComponentFixture<ItemscartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemscartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemscartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
