import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { QuestionDetailsComponent } from './components/question-details/question-details.component';
import { YonkeItemDetailComponent } from './components/yonke-item-detail/yonke-item-detail.component';

@Component({
  selector: 'app-confirmation',
  imports: [MatCardModule, QuestionDetailsComponent, YonkeItemDetailComponent],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent {

}
