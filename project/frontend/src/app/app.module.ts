import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componente/login/login.component';
import { PrincipalModule } from './componente/principal/principal.module';
import { HttpClientModule } from '@angular/common/http';
import { CadClienteComponent } from './componente/cad-cliente/cad-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadClienteComponent
  ],
  imports: [
    PrincipalModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
