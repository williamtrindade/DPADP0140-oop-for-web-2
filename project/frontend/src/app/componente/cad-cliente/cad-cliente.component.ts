import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.css']
})
export class CadClienteComponent implements OnInit {

  constructor(private clientesService: ClientesService) {
    this.clientesService.getClientes().subscribe(dados => {
      console.log('clientes... ', dados);
    });
  }

  ngOnInit() {
  }

}
