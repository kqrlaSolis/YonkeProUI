import { Component, inject, OnInit } from '@angular/core';
import { QuestionStore } from '../../../../core/store/questionStore';

@Component({
  selector: 'app-question-details',
  imports: [],
  templateUrl: './question-details.component.html',
  styleUrl: './question-details.component.scss'
})
export class QuestionDetailsComponent implements OnInit {
  public questionStore = inject(QuestionStore);

  public questions: any[] = []

  constructor() {}

  ngOnInit() {
    const questions = this.questionStore.getQuestions();
    console.log(questions);
    this.questions = questions;
  }


  deleteAllQuestions() {
    this.questionStore.deleteAllQuestions();
    this.questions = [];
  }

}