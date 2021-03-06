import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-correo",
  templateUrl: "./correo.component.html",
  styleUrls: ["./correo.component.scss"]
})
export class CorreoComponent implements OnInit {
  correo: any;

  constructor(
    private route: ActivatedRoute
  ) {
    /* this.correo = {
      titulo: 'Titulo del Email',
      cuerpo:
        'Cuerpo del emai, cuerpo del email Cuerpo del emai, cuerpo del email '+
        'Cuerpo del emai, cuerpo del email Cuerpo del emai, cuerpo del email'+
        'Cuerpo del emai, cuerpo del email',
      emisor: 'correoemisor@prueb.com',
      destinatario: 'correoDestini@prueba.com'
    };*/
    this.correo = {
      titulo: "",
      cuerpo: "",
      emisor: ""
    };
  }

  ngOnInit() {
    const datosRecibidos = this.route.snapshot.paramMap.get('correo');
    this.correo = JSON.parse(datosRecibidos);
  }
}
