import { Component } from '@angular/core';
import { HomeQuestionFormComponent } from "./components/home-question-form/home-question-form.component";

@Component({
  selector: 'app-home',
  imports: [HomeQuestionFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
