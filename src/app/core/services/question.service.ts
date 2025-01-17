import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private http = inject(HttpClient)
  private url = `${environment.base_url}/question`


  public sendQuestion(data: any) :Promise<any> {
    const request = firstValueFrom(this.http.post(this.url, data))
    return request;
  }
}
