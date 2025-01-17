import { Component, inject, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { QuestionDetailsComponent } from './components/question-details/question-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionStore } from '../../core/store/questionStore';
import { CommonModule } from '@angular/common';
import { YonkeItemDetailComponent } from './components/yonke-item-detail/yonke-item-detail.component';

@Component({
  selector: 'app-confirmation',
  imports: [MatCardModule, QuestionDetailsComponent, CommonModule, YonkeItemDetailComponent],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent {
  public router = inject(Router);
 public questionStore =  inject(QuestionStore);

 public async onSubmit() {
  this.router.navigate(['/home']);
 }
}
