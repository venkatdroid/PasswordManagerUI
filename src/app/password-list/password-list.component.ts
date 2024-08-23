import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PasswordDetail } from '../Model';
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

  passwordDetails: PasswordDetail[] = [];
  username: string = 'User';

  constructor(private router: Router,private service: PasswordManagerService){
    console.log('home data', history.state.data);
    this.username = history.state.data.username;
  }

  // users = [
  //   { username: 'john_doe', password: '********', category: 'Admin', app: 'Salesforce' },
  //   { username: 'jane_smith', password: '********', category: 'User', app: 'Gmail' },
  //   // Add more user data as needed
  // ];

  ngOnInit(){
    this.passwordDetails = this.service.getAllPasswords();
  }
  
  editPassword(user: any) {
    console.log('Edit user:', user);
    this.router.navigateByUrl('/edit-password', { state: { data: user } });
    // Implement edit functionality here
  }
  
  deletePassword(user: any) {
    console.log('Delete user:', user);
    this.showDeleteDialog = true;
    // Implement delete functionality here
  }
  
  decryptPassword(user: any) {
    console.log('Decrypt password for:', user);
    // Implement decrypt functionality here
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
