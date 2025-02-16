import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoaderStore } from './core/store/loaderStore';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { AuthOptionsComponent } from './pages/auth/components/auth-options/auth-options.component';

@Component({
  selector: 'app-init',
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'yonke-ui';
  public loaderStore = inject(LoaderStore);


  private dialog = inject(MatDialog);

  openDialog() {                //this is a method to open the dialog
    this.dialog.open(AuthOptionsComponent, {
      width: '500px',
      minHeight: '500px',
    });
  }
  
  closeDialog() {
    this.dialog.closeAll();
  }
}
