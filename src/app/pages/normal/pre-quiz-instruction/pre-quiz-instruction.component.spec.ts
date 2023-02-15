import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreQuizInstructionComponent } from './pre-quiz-instruction.component';

describe('PreQuizInstructionComponent', () => {
  let component: PreQuizInstructionComponent;
  let fixture: ComponentFixture<PreQuizInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreQuizInstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreQuizInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
