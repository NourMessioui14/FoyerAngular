import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReservComponent } from './update-reserv.component';

describe('UpdateReservComponent', () => {
  let component: UpdateReservComponent;
  let fixture: ComponentFixture<UpdateReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
