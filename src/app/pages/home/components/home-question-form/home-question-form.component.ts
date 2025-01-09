import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonModule} from '@angular/material/button'; 
import { QuestionService } from '../../../../core/services/question.service';
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home-question-form',
  imports: [MatInputModule, ReactiveFormsModule, MatSelectModule, MatButtonModule, MatChipsModule, CommonModule, MatIconModule],
  templateUrl: './home-question-form.component.html',
  styleUrl: './home-question-form.component.scss'
})

export class HomeQuestionFormComponent {
  fileName: string | null = null;
  
  public router = inject(Router);
  public questionService = inject(QuestionService)
  public questionForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    phone: new FormControl("", [Validators.required]),
    carModelYear: new FormControl("",[Validators.required]),
    carBrand: new FormControl("", [Validators.required]),
    carEngine: new FormControl("", [Validators.required]),
    pieceName: new FormControl("", [Validators.required]),
    cities: new FormControl<any>([]),
  })
  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.fileName = file.name;
      console.log('Archivo seleccionado:', file);
    }
  }

  public cities = [
    { name: "Ensenada" },
    { name: "Mexicali" },
    { name: "Tecate" },
    { name: "Tijuana" },
    { name: "Playas de Rosarito" },
    { name: "San Quintín" }
  ]

  public selectedCities = signal<any[]>([]);

  public onSelectCity(para:any){
    console.log(para)
    const isSelected = this.selectedCities().includes(para.value)
    if (isSelected) return;
    console.log(isSelected)
    this.selectedCities().push(para.value)
    // this.selectedCities.update((val)=> {
    //   return [
    //     ...val,
    //     para.value

    
    //   ]
    // })

    this.questionForm.patchValue({
      cities: this.selectedCities()
    })
  }

  public removeCity(city: string) {
    const newCities = this.selectedCities().filter((a)=>a!=city)
    this.selectedCities.set(newCities);
                 
  }

  

  public async onSubmit() {
    console.log(this.questionForm.value)
    const response = await this.questionService.sendQuestion(this.questionForm.value)
    console.log(response)

    this.router.navigate(['/confirmation']);
  }

  
}
