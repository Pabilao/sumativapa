import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn5ComponentComponent } from './btn5-component.component';

describe('Btn5ComponentComponent', () => {
  let component: Btn5ComponentComponent;
  let fixture: ComponentFixture<Btn5ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Btn5ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Btn5ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
