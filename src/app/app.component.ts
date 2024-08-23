import { Component } from '@angular/core';
import { SaveDataComponent } from "./save-data/save-data.component";
import { PasswordListComponent } from "./password-list/password-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [SaveDataComponent, PasswordListComponent, NavbarComponent, RouterModule]
})
export class AppComponent {
  title = 'PasswordManagerUI';
}
