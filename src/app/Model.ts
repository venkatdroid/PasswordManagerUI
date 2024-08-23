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

export interface PasswordDetail 
{
    id : number;
    category : number;
    app: number;
    username: string;
    encryptedPassword: string;
    decryptedPassword: string;    
}