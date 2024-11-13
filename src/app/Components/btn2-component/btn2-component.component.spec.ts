import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn2ComponentComponent } from './btn2-component.component';

describe('Btn2ComponentComponent', () => {
  let component: Btn2ComponentComponent;
  let fixture: ComponentFixture<Btn2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Btn2ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Btn2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
