import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipeswork } from './pipeswork';

describe('Pipeswork', () => {
  let component: Pipeswork;
  let fixture: ComponentFixture<Pipeswork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipeswork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipeswork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
