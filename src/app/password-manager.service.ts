import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UI } from './Model';

@Injectable({
  providedIn: 'root'
})
export class PasswordManagerService {

  baseUrl : string = '';

  constructor(private httpClient: HttpClient) 
  { 

  }

  getAllPasswords(){

    let passwordDetails : UI.PasswordDetail[] = [
      { id: 1 , username: 'testuser@mytest.com', password: 'TXlQYXNzd29yZEAxMjM=',  category: "Work", app: "Outlook" },
      { id: 2, username: 'testuser@mytest.com', password: 'TmV3UGFzc3dvcmRAMTIz',  category: "School", app: "Messenger" }
    ];

    return passwordDetails;
  }

  createPassword(newPassword : UI.PasswordDetail){
    //this.httpClient.post('url', newPassword);
  }

  updatePassword(updatePassword: UI.PasswordDetail){}

  deletePassword(deletePasswordId: number){}

  
}
