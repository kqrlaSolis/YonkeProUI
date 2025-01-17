import { Component, inject } from '@angular/core';
import { HomeQuestionFormComponent } from '../../../home/components/home-question-form/home-question-form.component';
import { QuestionStore } from '../../../../core/store/questionStore';

@Component({
  selector: 'app-yonke-item-detail',
  imports: [],
  templateUrl: './yonke-item-detail.component.html',
  styleUrl: './yonke-item-detail.component.scss'
})
export class YonkeItemDetailComponent {
  public questionStore = inject(QuestionStore);
}
