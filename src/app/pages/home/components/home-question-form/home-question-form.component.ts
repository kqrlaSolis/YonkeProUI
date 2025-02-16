import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { QuestionService } from '../../../../core/services/question.service';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { QuestionStore } from '../../../../core/store/questionStore';
import { FormRouteStore } from '../../../../core/store/formStore';

@Component({
  selector: 'app-home-question-form',
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './home-question-form.component.html',
  styleUrl: './home-question-form.component.scss',
})
export class HomeQuestionFormComponent {

private citiesSelect = viewChild('citiesSelect', {read: ElementRef});

  private questionStore = inject(QuestionStore);
  public formRouteStore = inject(FormRouteStore);

  public router = inject(Router);
  public questionService = inject(QuestionService);
  public questionForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]*$/),
    ]),
    carModelYear: new FormControl('', [Validators.required]),
    carBrand: new FormControl('', [Validators.required]),
    carEngine: new FormControl('', [Validators.required]),
    pieceName: new FormControl('', [Validators.required]),
    cities: new FormControl<any>([]),
  });
  public cities = [
    { name: 'Ensenada' },
    { name: 'Mexicali' },
    { name: 'Tecate' },
    { name: 'Tijuana' },
    { name: 'Playas de Rosarito' },
    { name: 'San Quintín' },
  ];

  public selectedCities = signal<any[]>([]);

  public selectedCitiesText = computed(() => this.selectedCities().join(', '));

  public onSelectionChange(para:any){
    console.log(this.selectedCities())
    const citiesSelectElement = this.citiesSelect();
    const isSelected = this.selectedCities().includes(para.value);
    if (isSelected) {
      this.selectedCities.update((cities) => cities.filter((city) => city !== para.value));
      if (citiesSelectElement) {
        citiesSelectElement.nativeElement.value = '';
      }
      return;
    };
    console.log(para.value)
    this.selectedCities.update((cities) => [...cities, para.value]);
    console.log(this.selectedCities())
    if (citiesSelectElement) {
      citiesSelectElement.nativeElement.value = '';
    }
    this.questionForm.patchValue({
      cities: this.selectedCities(),
    });
  }

  public async onSubmitForm() {
    const formData = this.questionForm.value;
    this.questionStore.setQuestions(formData); 

    const response =  await this.questionService.sendQuestion(formData); 
    this.formRouteStore.setIsAvailable(true);
    this.questionStore.setYonkes(response);

    this.router.navigate(['/confirmation']);
  }


}
