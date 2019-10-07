import { AvisosService } from './../../services/avisos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent implements OnInit {

  constructor(private servicioAvisos: AvisosService) { }

  ngOnInit() {
  }

}
