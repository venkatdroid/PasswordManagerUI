import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Captions } from '../Model';
import { NavbarComponent } from "../navbar/navbar.component";
import { PasswordManagerService } from '../password-manager.service';

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
  passwordValue: string = "";

  constructor(private router: Router, private service: PasswordManagerService) {

  }

  ngOnInit(){
    if(history.state.data)
    {
      this.setEditValue(history.state.data);      
    }

    console.log('DATA ', history.state.data);
  }

  passwordDetail = {
    id: 0,
    username: '',
    password: '',
    category: '',
    app: ''
  };


  showPassword = false;
  showDialog = false;

  categories = [ {id : 1, value: 'Work' ,viewValue: 'Work'},
                 {id : 2, value: 'School' ,viewValue: 'School'}, 
                 {id : 3, value: 'Others',viewValue: 'Others'} ];

  apps = [ {id : 1, value: 'Outlook' ,viewValue: 'Outlook'},
           {id : 2, value: 'Messenger' ,viewValue: 'Messenger'}, 
           {id : 3, value: 'Others' ,viewValue: 'Others'} ];

  togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.passwordValue = this.service.getDecryptedPasswordById(this.passwordDetail.id);
    }
  }

  onSubmit() {
    if (this.passwordDetail.username && this.passwordDetail.password && this.passwordDetail.category && this.passwordDetail.app) {
      console.log('Form data:', this.passwordDetail);
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
    this.setPasswordDetailValue(value);
  }

  setPasswordDetailValue(value: any)
  {
    this.passwordDetail.id = value.id;
    this.passwordDetail.username = value.username;
    this.passwordDetail.password = value.password;
    this.passwordValue = value.password;
    this.passwordDetail.app = value.app;
    this.passwordDetail.category = value.category;
  }
}

