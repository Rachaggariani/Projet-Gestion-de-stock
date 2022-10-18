import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountmaterialComponent } from './countmaterial.component';

describe('CountmaterialComponent', () => {
  let component: CountmaterialComponent;
  let fixture: ComponentFixture<CountmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountmaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
