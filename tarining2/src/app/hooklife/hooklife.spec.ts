import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hooklife } from './hooklife';

describe('Hooklife', () => {
  let component: Hooklife;
  let fixture: ComponentFixture<Hooklife>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hooklife]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hooklife);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
