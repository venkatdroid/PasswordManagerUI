import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UI } from '../Model';
import { PasswordManagerService } from '../password-manager.service';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-password-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './password-list.component.html',
  styleUrl: './password-list.component.css'
})
export class PasswordListComponent {

  passwordDetails: UI.PasswordDetail[] = [];
  username: string = 'User';

  constructor(private router: Router,private service: PasswordManagerService){
    console.log('home data', history.state.data);
    if (history.state.username != undefined) {
      this.username = history.state.data.username;
    }
  }

  ngOnInit(){
    this.passwordDetails = this.service.getAllPasswords();
  }
  
  editPassword(user: any) {
    console.log('Edit user:', user);
    this.router.navigateByUrl('/edit-password', { state: { data: user } });
  }
  
  deletePassword(user: any) {
    console.log('Delete user:', user);
    this.showDeleteDialog = true;
  }
  
  decryptPassword(user: any) {
    console.log('Decrypt password for:', user);
  }

  onCreateNewPasswordClick(){
    this.router.navigate(['/create-password']);
  }

  showDeleteDialog = false;

  openDeleteDialog() {
    this.showDeleteDialog = true;
  }

  confirmDelete() {
    this.showDeleteDialog = false;
    // Implement delete functionality here
    console.log('Item deleted');
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }
}
