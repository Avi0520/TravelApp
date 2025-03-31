import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabBookingTableComponent } from './cab-booking-table.component';

describe('CabBookingTableComponent', () => {
  let component: CabBookingTableComponent;
  let fixture: ComponentFixture<CabBookingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabBookingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabBookingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
