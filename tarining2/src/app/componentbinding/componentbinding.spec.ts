import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentbinding } from './componentbinding';

describe('Componentbinding', () => {
  let component: Componentbinding;
  let fixture: ComponentFixture<Componentbinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentbinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentbinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
