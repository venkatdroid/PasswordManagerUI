import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Captions } from '../Model';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-save-data',
  templateUrl: './save-data.component.html',
  styleUrls: ['./save-data.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
})


export class SaveDataComponent {

  submitButtonText: string = Captions.btn_save;
  successMessage: string = Captions.msg_save_success;
  constructor(private router: Router) {

  }

  ngOnInit(){
    if(history.state.data)
    {
      this.setEditValue(history.state.data);      
    }

    console.log('DATA ', history.state.data);
  }

  user = {
    username: '',
    password: '',
    category: '',
    app: ''
  };

  showPassword = false;
  showDialog = false;

  categories = [ {id : 1, value: 1 ,viewValue: 'Work'},
                 {id : 2, value: 2 ,viewValue: 'School'}, 
                 {id : 3, value: 3 ,viewValue: 'Others'} ];

  apps = [ {id : 1, value: 1 ,viewValue: 'Outlook'},
           {id : 2, value: 2 ,viewValue: 'Messenger'}, 
           {id : 3, value: 3 ,viewValue: 'Others'} ];

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.user.username && this.user.password && this.user.category && this.user.app) {
      console.log('Form data:', this.user);
      this.showDialog = true;      
    }
  }

  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['/home']);
  }

  setEditValue(value: any){
    this.submitButtonText = Captions.btn_edit;
    this.successMessage = Captions.msg_edit_succcess;
    this.user.username = value.username;
    this.user.password = value.password;
    this.user.app = value.app;
    this.user.category = value.category;
  }
}

