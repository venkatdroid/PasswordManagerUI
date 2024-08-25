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

  passwordDetails : UI.PasswordDetail[] = [
    { id: 1 , username: 'testuser@mytest.com', password: 'TXlQYXNzd29yZEAxMjM=',  category: "Work", app: "Outlook" },
    { id: 2, username: 'testuser@mytest.com', password: 'TmV3UGFzc3dvcmRAMTIz',  category: "School", app: "Messenger" }
  ];

  getAllPasswords(){

    // let passwordDetails : UI.PasswordDetail[] = [
    //   { id: 1 , username: 'testuser@mytest.com', password: 'TXlQYXNzd29yZEAxMjM=',  category: "Work", app: "Outlook" },
    //   { id: 2, username: 'testuser@mytest.com', password: 'TmV3UGFzc3dvcmRAMTIz',  category: "School", app: "Messenger" }
    // ];

    return this.passwordDetails;
  }

  getDecryptedPasswordById(id : number)
  {
    //let password = need to make api request;
    let passwordDetail = this.passwordDetails.find(x => x.id == id);
    let decryptedPassword = passwordDetail?.password ?? "";
    if (passwordDetail != undefined) 
       decryptedPassword = atob(passwordDetail?.password ?? "");
    return decryptedPassword;
  }

  createPassword(newPassword : UI.PasswordDetail){
    //this.httpClient.post('url', newPassword);
  }

  updatePassword(updatePassword: UI.PasswordDetail){}

  deletePassword(deletePasswordId: number){}


  
}
