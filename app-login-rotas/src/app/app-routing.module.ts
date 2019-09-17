import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componente/login/login.component';
import { PrincipalComponent } from './componente/principal/principal.component';
import { HomeComponent } from './componente/principal/home/home.component';
import { CadClientesComponent } from './componente/principal/cad-clientes/cad-clientes.component';


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'principal', component: PrincipalComponent,
      children :[
        {path: '', redirectTo:'home', pathMatch:'full'},
        {path:'home', component: HomeComponent},
        {path: 'clientes', component: CadClientesComponent}
      ]
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
