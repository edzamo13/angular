import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCorreoGmailComponent } from './lista-correo-gmail.component';

describe('ListaCorreoGmailComponent', () => {
  let component: ListaCorreoGmailComponent;
  let fixture: ComponentFixture<ListaCorreoGmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCorreoGmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCorreoGmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
