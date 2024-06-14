import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExCompComponent } from './ex-comp.component';

describe('ExCompComponent', () => {
  let component: ExCompComponent;
  let fixture: ComponentFixture<ExCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
