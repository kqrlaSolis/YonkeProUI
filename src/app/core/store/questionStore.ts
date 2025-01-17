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
  withComputed((store) => ({
    getYonkes: computed(() => store.yonkes()),
    getQuestions: computed(() => {
      const recentQuestions = localStorage.getItem('questionFormData');
      if (!recentQuestions) return [];
      const decodeQuestions: any[] = JSON.parse(recentQuestions);
      return decodeQuestions;
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
      localStorage.setItem('questionFormData', JSON.stringify(newQuestions));
      patchState(store, { questions: newQuestions });
    },
  }))
);
