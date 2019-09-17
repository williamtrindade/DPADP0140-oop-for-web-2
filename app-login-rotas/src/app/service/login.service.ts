import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { LoginModel } from '../model/login.model';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private storage: SessionStorageService) { }

  setarUsuario(): void{

    let login : LoginModel = new LoginModel();
    login.id = 1;
    login.login = 'abc';
    login.senha = '123';
    this.storage.store(login.id.toString(), login);
  }

  getLogin() : LoginModel{
    return  this.storage.retrieve('1');
  }


  autenticar(login : LoginModel) : boolean{
    console.log('usuário: ', login)
    console.log('banco-> ', this.getLogin())
    if(login.senha === this.getLogin().senha  ){
        console.log('true ...')
        return true;
      }else{
        console.log('false ...')
        return false;
      }
      
    }

}
