import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoComponentComponent } from './texto-component.component';

describe('TextoComponentComponent', () => {
  let component: TextoComponentComponent;
  let fixture: ComponentFixture<TextoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
