import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtudComponent } from './liste-etud.component';

describe('ListeEtudComponent', () => {
  let component: ListeEtudComponent;
  let fixture: ComponentFixture<ListeEtudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEtudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
