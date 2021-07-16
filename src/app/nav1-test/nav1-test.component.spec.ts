import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav1TestComponent } from './nav1-test.component';

describe('Nav1TestComponent', () => {
  let component: Nav1TestComponent;
  let fixture: ComponentFixture<Nav1TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nav1TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nav1TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
