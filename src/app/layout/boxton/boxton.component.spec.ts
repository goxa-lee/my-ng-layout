import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxtonComponent } from './boxton.component';

describe('BoxtonComponent', () => {
  let component: BoxtonComponent;
  let fixture: ComponentFixture<BoxtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxtonComponent]
    });
    fixture = TestBed.createComponent(BoxtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
