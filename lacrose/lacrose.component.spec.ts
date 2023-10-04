import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacroseComponent } from './lacrose.component';

describe('LacroseComponent', () => {
  let component: LacroseComponent;
  let fixture: ComponentFixture<LacroseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LacroseComponent]
    });
    fixture = TestBed.createComponent(LacroseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
