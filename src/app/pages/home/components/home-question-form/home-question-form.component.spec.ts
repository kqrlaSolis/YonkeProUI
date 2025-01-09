import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuestionFormComponent } from './home-question-form.component';

describe('HomeQuestionFormComponent', () => {
  let component: HomeQuestionFormComponent;
  let fixture: ComponentFixture<HomeQuestionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeQuestionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
