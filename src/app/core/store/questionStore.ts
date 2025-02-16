import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

//Un `type` se utiliza para definir un tipo de dato personalizado, asi como `string` | `number`

type QuestionState = {
  yonkes: any[];
  questions: any[];
};

const initialState: QuestionState = {
  yonkes: [],
  questions: [],
};

export const QuestionStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({questions, yonkes}) => ({
    getYonkes: computed(() => yonkes()),
    getQuestions: computed(() => {


      if(questions().length === 0) {

        const recentQuestions = localStorage.getItem('questionFormData');
        if (!recentQuestions) return [];
        
        const decodeQuestions: any[] = JSON.parse(recentQuestions);
        
        return decodeQuestions;
      }else{
        return questions();
      }

    }),
    
  })),
  withMethods((store) => ({
    setYonkes(newYonkes: any[]) {
      patchState(store, { yonkes: newYonkes });
    },
    setQuestions(questions: any) {
      const recentQuestions = localStorage.getItem('questionFormData');
      
      let newQuestions = [];

      if (recentQuestions) {
        const decodeQuestions: any[] = JSON.parse(recentQuestions);
        newQuestions = [...decodeQuestions, questions];
      } else {
        newQuestions.push(questions);
      }
      console.log(newQuestions);
      localStorage.setItem('questionFormData', JSON.stringify(newQuestions));
      patchState(store, { questions: newQuestions });
    },
    deleteAllQuestions() {
      localStorage.removeItem('questionFormData');
      patchState(store, { questions: [] });
    }
  }))
);
