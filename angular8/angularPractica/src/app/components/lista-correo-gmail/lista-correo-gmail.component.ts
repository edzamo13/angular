import { Component, OnInit } from '@angular/core';
import { GmailService } from 'src/app/services/gmail.service';
import { Router } from '@angular/router';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { AvisosService } from 'src/app/services/avisos.service';
import { Correo } from '../../views/intefaces/correo';


@Component({
  selector: 'app-lista-correo-gmail',
  templateUrl: './lista-correo-gmail.component.html',
  styleUrls: ['./lista-correo-gmail.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListaCorreoGmailComponent implements OnInit {
  correos: Correo[];
  columnsToDisplay: string[] = ['Emisor', 'Asunto', 'Acciones'];
  displayedColumns: string[] = ['emisor', 'titulo', 'id'];
  dataSource = new MatTableDataSource<Correo>();
  expandedElement: any | null;

  constructor(private gmail: GmailService, private router: Router, private servicioAvisos: AvisosService) {
    this.correos = [];
  }

  ngOnInit() {
    this.getRecibidos();
  }

  accionRespuestaRapida() {
    this.expandedElement = null;
  }

  getRecibidos() {
    this.gmail.getRecibidos().subscribe(
      (response) => {
        const mensajes = response.messages;
        
        mensajes.forEach(element => {
          this.getMensaje(element.id);
        });
      },
      (error) => this.error(error)
    );
  }

  getMensaje(id: string){
    this.gmail.getMessage(id).subscribe(
      (correo) => {
        
        this.dataSource.data.push(correo);
        this.dataSource._updateChangeSubscription();
      },
      (error) => this.error(error)
    );
  }

  error(error){
    this.servicioAvisos.showMenssage("Se ha producido un error");
  }

  verDetalle(correo){
    this.router.navigate(['/mail', {correo: JSON.stringify(correo)}]);
  }
}
