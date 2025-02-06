import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { HomeQuestionFormComponent } from './components/home-question-form/home-question-form.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { QuestionService } from '../../core/services/question.service';
import { QuestionStore } from '../../core/store/questionStore';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-home',
  imports: [NavigationBarComponent, HeroSectionComponent,HomeQuestionFormComponent, ReactiveFormsModule, MatInputModule, MatSelectModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}