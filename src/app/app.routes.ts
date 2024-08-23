import { NgModule } from '@angular/core';
import { RouterEvent, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordListComponent } from './password-list/password-list.component';
import { SaveDataComponent } from './save-data/save-data.component';

export const routes: Routes = [
    { path: '', component : LoginComponent },
    { path: 'home', component : PasswordListComponent },
    { path: 'create-password', component : SaveDataComponent },
    { path: 'edit-password', component : SaveDataComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }