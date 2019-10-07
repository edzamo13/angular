import { CorreoComponent } from './components/correo/correo.component';
import { EnviarComponent } from './views/enviar/enviar.component';
import { CorreosRecibidosComponent } from './views/correos-recibidos/correos-recibidos.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'home',component:HomeComponent},
  {path:'mails',component:CorreosRecibidosComponent},
  {path:'send', component:EnviarComponent},
  {path:'mail', component:CorreoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
