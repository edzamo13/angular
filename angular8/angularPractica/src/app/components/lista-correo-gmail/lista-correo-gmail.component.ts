import { Component, OnInit } from '@angular/core';
import { GmailService } from 'src/app/services/gmail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-correo-gmail',
  templateUrl: './lista-correo-gmail.component.html',
  styleUrls: ['./lista-correo-gmail.component.scss']
})
export class ListaCorreoGmailComponent implements OnInit {
  correos: any[];

  constructor(private gmail: GmailService, private router: Router) {
    this.correos = [];
  }

  ngOnInit() {
    this.getRecibidos();
  }

  clickResponder(correo) {
    correo.responder = !correo.responder;
  }

  accionRespuestaRapida(correo) {
    correo.responder = false;
  }

  getRecibidos() {
    this.gmail.getRecibidos().subscribe(
      response => {
        const mensajes = response.messages;

        mensajes.forEach(element => {
          this.getMensaje(element.id);
        });
      },
      error => this.error(error)
    );
  }

  getMensaje(id: string) {
    this.gmail.getMessage(id).subscribe(
      response => {
        const emisor = response.payload.headers.find(e => e.name === 'From');
        const subject = response.payload.headers.find(
          e => e.name === 'Subject'
        );

        const mensage = {
          id: response.id,
          cuerpo: response.snippet,
          emisor: emisor ? emisor.value : undefined,
          titulo: subject ? subject.value : undefined
        };
        this.correos.push(mensage);
      },
      error => this.error(error)
    );
  }

  error(error) {
    console.warn('ERROR');
  }
  verDetalle(correo) {
    this.router.navigate(['/mail', { correo: JSON.stringify(correo) }]);
  }
}
