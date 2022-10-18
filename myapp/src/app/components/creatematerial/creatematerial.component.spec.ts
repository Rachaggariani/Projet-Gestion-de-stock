import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatematerialComponent } from './creatematerial.component';

describe('CreatematerialComponent', () => {
  let component: CreatematerialComponent;
  let fixture: ComponentFixture<CreatematerialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatematerialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatematerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
