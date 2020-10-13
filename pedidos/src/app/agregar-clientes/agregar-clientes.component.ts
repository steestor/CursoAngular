import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clientes } from '../models/Clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.scss'],
})
export class AgregarClientesComponent implements OnInit {
  formularioAgregar: FormGroup;
  cliente: Clientes = new Clientes();

  constructor(
    private formBuilder: FormBuilder,
    public clienteService: ClientesService
  ) {}

  ngOnInit(): void {
    this.formularioAgregar = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  agregar() {
    this.cliente = this.formularioAgregar.value as Clientes;
    this.clienteService.agregarLocalStorage(this.cliente);
    this.formularioAgregar.reset();
  }
}
