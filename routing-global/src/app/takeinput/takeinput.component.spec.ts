import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeinputComponent } from './takeinput.component';

describe('TakeinputComponent', () => {
  let component: TakeinputComponent;
  let fixture: ComponentFixture<TakeinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
