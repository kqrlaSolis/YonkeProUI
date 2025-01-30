import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoaderStore } from './core/store/loaderStore';

@Component({
  selector: 'app-init',
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'yonke-ui';
  public loaderStore = inject(LoaderStore);
}
