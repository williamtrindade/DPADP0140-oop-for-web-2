import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CadClientesComponent } from './cad-clientes/cad-clientes.component';



@NgModule({
  declarations: [PrincipalComponent, MenuSuperiorComponent, HomeComponent, CadClientesComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PrincipalModule { }
