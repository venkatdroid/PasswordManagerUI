import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PasswordDetail } from './Model';

@Injectable({
  providedIn: 'root'
})
export class PasswordManagerService {

  baseUrl : string = '';

  constructor(private httpClient: HttpClient) 
  { 

  }

  getAllPasswords(){

    let passwordDetails : PasswordDetail[] = [
      { id: 1 , username: 'john_doe', encryptedPassword: 'Test123', decryptedPassword: '', category: 1, app: 1 },
      { id: 2, username: 'jane_smith', encryptedPassword: 'Chotu@123', decryptedPassword: '', category: 2, app: 2 }
    ];

    return passwordDetails;
  }

  createPassword(newPassword : PasswordDetail){
    //this.httpClient.post('url', newPassword);
  }

  updatePassword(updatePassword: PasswordDetail){}

  deletePassword(deletePasswordId: number){}

  
}
