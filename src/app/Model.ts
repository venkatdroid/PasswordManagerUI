export class Captions {

 static btn_save : string = "Save";
 static btn_edit : string = "Edit";
 static btn_cancel : string = "Cancel" ;
 static btn_ok : string = "OK" ;
 static msg_save_success : string = "Saved Successfully !";
 static msg_save_failure : string = "Save Failed !";
 static msg_edit_succcess : string = "Edited Successfuly !";
 static msg_edit_failure : string = "Edit Failed !";
 static warn_delete : string = "Are you sure you want to delete this item?"

}

export class Routes 
{
  static createPassword = "/PasswordManager";  
  static updatePassword = "/PasswordManager/";  
  static deletePassword = "/PasswordManager/";
  static getAllPasswords =  "/PasswordManager/GetAllPasswords";
  static getPasswordDetailsById = "/PasswordManager/";
  static getDecryptedPasswordDetailsById = "/PasswordManager/DecryptedPasswordDetail"

}

export interface PasswordDetail {
  id: number;
  category: string;
  app: string;
  username: string;
  password: string;
}

export interface DecryptedPasswordDetail extends PasswordDetail {

  decryptedPasswordValue: string;
}
