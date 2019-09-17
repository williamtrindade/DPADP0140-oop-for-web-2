import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { LoginModel } from 'src/app/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public login : LoginModel = new LoginModel();

  constructor(private rota : Router, 
              private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.setarUsuario();
  }

  logar() : void{
    //let logado = this.loginService.getLogin();
    
    if(this.loginService.autenticar(this.login)){
      this.rota.navigate(['/principal']);
    }else{
      alert("Usuário ou Senha Incorretos");
    }

    
  }

}
