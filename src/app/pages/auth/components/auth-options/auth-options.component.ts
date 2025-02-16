import { Component, inject } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from "../signup/signup.component";

@Component({
  selector: 'app-auth-options',
  imports: [MatTabsModule, LoginComponent, SignupComponent],
  templateUrl: './auth-options.component.html',
  styleUrl: './auth-options.component.scss',
})
export class AuthOptionsComponent {
    private dialog = inject(MatTabsModule);
}
