import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Directivecom } from './directive';

describe('Directivecom Component', () => {
  let component: Directivecom;
  let fixture: ComponentFixture<Directivecom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Directivecom]   // Standalone component imported here
    }).compileComponents();

    fixture = TestBed.createComponent(Directivecom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have fruits array with 4 items', () => {
    expect(component.fruits.length).toBe(4);
  });

  it('should render fruit list in template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('li');

    expect(items.length).toBe(4); // matches *ngFor output
    expect(items[0].textContent?.trim()).toBe('Apple');
  });

  it('should hide or show element based on isValid', () => {
    component.isValid = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const text = compiled.querySelector('.valid-message');

    expect(text).toBeTruthy();
  });
});
