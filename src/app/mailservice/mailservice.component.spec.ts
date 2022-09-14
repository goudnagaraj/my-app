import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailserviceComponent } from './mailservice.component';

describe('MailserviceComponent', () => {
  let component: MailserviceComponent;
  let fixture: ComponentFixture<MailserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
