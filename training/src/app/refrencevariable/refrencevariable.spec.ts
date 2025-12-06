import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Refrencevariable } from './refrencevariable';

describe('Refrencevariable', () => {
  let component: Refrencevariable;
  let fixture: ComponentFixture<Refrencevariable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Refrencevariable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Refrencevariable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
