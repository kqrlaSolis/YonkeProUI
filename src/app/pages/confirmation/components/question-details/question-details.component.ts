import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { YonkeItemDetailComponent } from "../yonke-item-detail/yonke-item-detail.component";

@Component({
  selector: 'app-question-details',
  imports: [MatCardModule, YonkeItemDetailComponent],
  templateUrl: './question-details.component.html',
  styleUrl: './question-details.component.scss'
})
export class QuestionDetailsComponent {

}

  





