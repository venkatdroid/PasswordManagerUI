import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PasswordManagerService } from '../password-manager.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { PasswordDetail } from '../Model';

@Component({
  selector: 'app-password-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './password-list.component.html',
  styleUrl: './password-list.component.css',
})
export class PasswordListComponent {
  passwordDetails: PasswordDetail[] = [];
  currentPasswordDetail: PasswordDetail | undefined;
  username: string = 'User';

  constructor(private router: Router, private service: PasswordManagerService) {
    console.log('home data', history.state.data);
    if (history.state.username != undefined) {
      this.username = history.state.data.username;
    }
  }

  ngOnInit() {
    this.initializeValues();
  }

  async initializeValues() {
    this.passwordDetails = await this.service.getAllPasswords();
    this.passwordDetails = [...this.passwordDetails];
  }

  editPassword(passwordDetail: PasswordDetail) {
    this.router.navigateByUrl('/edit-password', {
      state: { data: passwordDetail },
    });
  }

  deletePassword(passwordDetail: PasswordDetail) {
    this.currentPasswordDetail = passwordDetail;
    this.showDeleteDialog = true;
  }

  onCreateNewPasswordClick() {
    this.router.navigate(['/create-password']);
  }

  showDeleteDialog = false;

  openDeleteDialog() {
    this.showDeleteDialog = true;
  }

  async confirmDelete() {
    this.showDeleteDialog = false;
    if (this.currentPasswordDetail != undefined) {
      var result = await this.service.deletePassword(
        this.currentPasswordDetail.id
      );
      if (result) {
        this.initializeValues();
      }
      console.log('Item deleted');
    }
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }
}
