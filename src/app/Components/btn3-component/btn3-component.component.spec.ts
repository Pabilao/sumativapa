import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn3ComponentComponent } from './btn3-component.component';

describe('Btn3ComponentComponent', () => {
  let component: Btn3ComponentComponent;
  let fixture: ComponentFixture<Btn3ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Btn3ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Btn3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
