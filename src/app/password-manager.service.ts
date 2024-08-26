import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DecryptedPasswordDetail, PasswordDetail, Routes } from './Model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordManagerService {

  baseUrl : string = 'https://localhost:7064';

  constructor(private httpClient: HttpClient) 
  { 

  }

  passwordDetails : PasswordDetail[] = [
    { id: 1 , username: 'testuser@mytest.com', password: 'TXlQYXNzd29yZEAxMjM=',  category: "Work", app: "Outlook" },
    { id: 2, username: 'testuser@mytest.com', password: 'TmV3UGFzc3dvcmRAMTIz',  category: "School", app: "Messenger" }
  ];

  async getAllPasswords(): Promise<PasswordDetail[]>{

    // let apiUrl: string = this.baseUrl + Routes.getAllPasswords;

    // let result : Promise<any> = firstValueFrom(this.httpClient.get<PasswordDetail[]>(apiUrl)).catch((error) => {
    //   console.log("Error while fetching data getAllPasswords : ", error);
    // });

    // return result;

    return Promise.resolve(this.passwordDetails);
  }

  getDecryptedPasswordById(id : number)
  {
    let passwordDetail = this.passwordDetails.find(x => x.id == id);
    let decryptedPassword = passwordDetail?.password ?? "";
    if (passwordDetail != undefined) 
       decryptedPassword = atob(passwordDetail?.password ?? "");

    //let apiUrl: string = this.baseUrl + Routes.getDecryptedPasswordDetailsById;
    
    // let result : Promise<any> = firstValueFrom(this.httpClient.get<DecryptedPasswordDetail>(apiUrl)).catch((error) => {
    //   console.log("Error while fetching data getDecryptedPasswordDetailsById : ", error);
    // });

    // return result;

    return decryptedPassword;
  }

  async createPassword(newPassword : PasswordDetail){

    //let apiUrl: string = this.baseUrl + Routes.createPassword;

    // var result = await firstValueFrom(this.httpClient.post<boolean>(apiUrl, newPassword)).catch((error) => {
    //   console.log("Error while fetching data createPassword : ", error);
    // });

    //return result;

    this.passwordDetails.push(newPassword);

    return Promise.resolve(true);

  }

  updatePassword(updatePassword: PasswordDetail)
  {
    // let apiUrl: string = this.baseUrl + Routes.updatePassword + (updatePassword.id).toString();

    // let result : Promise<any> = firstValueFrom(this.httpClient.put<boolean>(apiUrl, updatePassword)).catch((error) => {
    //   console.log("Error while fetching data updatePassword : ", error);
    // });

    let oldDataIndex = this.passwordDetails.findIndex(x => x.id == updatePassword.id);
    this.passwordDetails.splice(oldDataIndex, 1);
    this.passwordDetails.push(updatePassword);

    var result = Promise.resolve(true);

    return result;
  }

  deletePassword(deletePasswordId: number)
  {
    // let apiUrl: string = this.baseUrl + Routes.deletePassword + deletePasswordId;

    // let result : Promise<any> = firstValueFrom(this.httpClient.delete<boolean>(apiUrl)).catch((error) => {
    //   console.log("Error while fetching data deletePassword : ", error);
    // });

    let oldDataIndex = this.passwordDetails.findIndex(x => x.id == deletePasswordId);
    this.passwordDetails.splice(oldDataIndex, 1);

    var result = Promise.resolve(true);

    return result;
  }


  
}
