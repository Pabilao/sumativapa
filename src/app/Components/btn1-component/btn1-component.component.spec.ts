import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn1ComponentComponent } from './btn1-component.component';

describe('Btn1ComponentComponent', () => {
  let component: Btn1ComponentComponent;
  let fixture: ComponentFixture<Btn1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Btn1ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Btn1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
