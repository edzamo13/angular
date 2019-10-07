import { MaterialModule } from './views/modules/material.module';
import { MenuComponent } from './menu/menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './components/correo/correo.component';
import { ListaCorreosComponent } from './components/lista-correos/lista-correos.component';
import { NuevoCorreoComponent } from './components/nuevo-correo/nuevo-correo.component';
import { CorreosRecibidosComponent } from './views/correos-recibidos/correos-recibidos.component';
import { AvisosComponent } from './components/avisos/avisos.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleApiModule, NgGapiClientConfig, NG_GAPI_CONFIG } from 'ng-gapi';
import { LoginComponent } from './components/login/login.component';
import { ListaCorreoGmailComponent } from './components/lista-correo-gmail/lista-correo-gmail.component';
import { HomeComponent } from './views/home/home.component';
import { EnviarComponent } from './views/enviar/enviar.component';
import { VisualizarCorreoComponent } from './views/visualizar-correo/visualizar-correo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const gapiClientConfig: NgGapiClientConfig = {
  client_id:
    '395684135333-7cs6mldgfgr2q531bu51el0j4hdosv0s.apps.googleusercontent.com',
  discoveryDocs: [
    'https://analyticsreporting.googleapis.com/$discovery/rest?version=v4'
  ],
  ux_mode: 'popup',
  redirect_uri: 'http://localhost:4200/loged',
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/gmail.labels',
    'https://www.googleapis.com/auth/gmail.send',
    'https://www.googleapis.com/auth/gmail.readonly'
  ].join(' ')
};

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreosComponent,
    NuevoCorreoComponent,
    CorreosRecibidosComponent,
    AvisosComponent,
    LoginComponent,
    ListaCorreoGmailComponent,
    HomeComponent,
    EnviarComponent,
    MenuComponent,
    VisualizarCorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    BrowserAnimationsModule,
   MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
