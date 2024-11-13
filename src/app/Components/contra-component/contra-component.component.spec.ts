import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraComponentComponent } from './contra-component.component';

describe('ContraComponentComponent', () => {
  let component: ContraComponentComponent;
  let fixture: ComponentFixture<ContraComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContraComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContraComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
