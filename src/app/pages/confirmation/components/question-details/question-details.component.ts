import { Component, inject, OnInit } from '@angular/core';
import { QuestionStore } from '../../../../core/store/questionStore';

@Component({
  selector: 'app-question-details',
  imports: [],
  templateUrl: './question-details.component.html',
  styleUrl: './question-details.component.scss'
})
export class QuestionDetailsComponent {
  public questionStore = inject(QuestionStore);
}